
const User = require('../Domain/Domain_services/Models/userModel');
const Post = require('../Domain/Domain_services/Models/postModel');
const Picture = require('../Domain/Domain_services/Models/pictureModel')
const bcrypt = require('bcrypt');
const BDD = require('../Domain/Data/dbConnection');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cloudinary = require('../Config/cloudinary');






module.exports = {
    getAllUsers(req, res) {
        User.find().then(result => {
            res.send(result)
        })
    },
    getUser(req, res) {

        const id = req.user._id
        User.findOne({ _id: id }).then(result => {
            res.send(result)
        })

    },

    getUserByID(req, res) {

        User.findOne({ _id: req.params.id }).then(result => {
           res.send(result)
        })
    },

    createUser(req, res) {
        User.findOne({ Email: req.body.Email }).then(result => {

            if (result == null) {
                const newUser = new User({
                    Name: req.body.Name,
                    FirstName: req.body.FirstName,
                    Email: req.body.Email,
                    Password: req.body.Password,
                    Fabric: req.body.Fabric,
                    Year: req.body.Year,
                    TypeFormation: req.body.TypeFormation,
                    Techno: req.body.Techno,
                    Description: req.body.Description,
                    Company: req.body.Company,
                    PostList: req.body.PostList,
                    Status: req.body.Status,
                    IsAdmin: req.body.IsAdmin,
                })

                newUser.save((err, user) => {
                    if (err) {
                         res.status(400).send({Erreur:err})
                        res.send(err)
                    } else {
                        res.sendStatus(201)
                    }
                })
            } else {
                res.send('Utilisateur déjà connu')
            }
        })
    },
    deleteUser(req, res) {
        User.findOne({ Email: req.body.Email }).then(result => {
            if (result == null) {
                res.sendStatus(204)
            } else {
                result.remove((err, user) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.sendStatus(200)
                    }
                })
            }
        })
    },
    updateUser(req, res) {
        const acceptMaj = [];
        const errors =[];
        User.findOne({ Email: req.user.Email }).then( async (user) => {
            if (user.Description != req.body.Description && req.body.Description != null) {
                user.updateOne({ Description: req.body.Description },(err, user) => {
                    if (err) {
                        errors.push(err)
                    } else {
                        acceptMaj.push(desc)      
                    }
                });
            } if (user.Company != req.body.Company && req.body.Company != null) {
                user.updateOne({ Company: req.body.Company },(err, user) => {
                    const company = { Company: req.body.Company }
                    if (err) {
                        errors.push(err)
                         
                    } else {
                        acceptMaj.push(company)
                            
                    }
                })
            } if (user.Techno != req.body.Techno && req.body.Techno != null) {
                user.updateOne({ Techno: req.body.Techno },(err, user) => {
                    const techno = { Techno: req.body.Techno }
                    if (err) {
                        errors.push(err)
                            
                    } else {
                        acceptMaj.push(techno)
                            
                    }
                })
            } if (req.body.Password != null && req.body.newPassword != null && req.body.Password != req.body.newPassword) {
                await bcrypt.compare(req.body.Password, user.Password, (err, match) => {
                    if (err) {
                        res.send(err)
                    } else {
                        bcrypt.hashPassword(req.body.newPassword, 10, (err, hash) => {
                            if (err) {
                                res.send(err)
                            } else {
                                user.updateOne({ Password: hash },(err, user) => {
                                    const pass = "Mot de passe"
                                    if (err) {
                                        errors.push(err)
                                            
                                    } else {
                                        acceptMaj.push(pass)
                                          
                                    }
                                })
                            }
                        })
                    }
                })
            } if (req.body.Email != null && req.body.newEmail != null && req.body.Email != req.body.newEmail) {
                await bcrypt.compare(req.body.Password, user.Password, (err, match) => {
                    if (err) {
                        res.send(err)
                    } else {
                        user.updateOne({ Email: req.body.newMail },(err, user) => {
                            const mail = "Email"
                            if (err) {
                                errors.push(err)
                                    
                            } else {
                                acceptMaj.push(mail)
                                   
                            }
                        })
                    }
                })
            }
        })
       switch(true){
            case acceptMaj.length == 0 && errors.length == 0 : res.status(400).send({message : "Aucune mise à jour n'a été effectuée "});
            
            case acceptMaj.length != 0 && errors.length == 0 : res.status(200).send({message:"Les mises à jour ont été effectuées avec succés "});
            
            case acceptMaj.length == 0 && errors.length != 0 : res.status(400).send({message:"Une ou plusieurs erreurs sont survenues"});
            break;
            default : res.status(400).send({message:"Certaine des mises à jour n'ont pu être effectuées"});
       } 
           
       
    },
    updateUserAdmin(req, res) {
        User.findOne({ Email: req.body.Email }).then(user => {
            if (req.body.Name != null && req.body.Name != user.Name) {
                user.updateOne({ Name: req.body.Name })
                res.sendStatus(200)
            }
            if (req.body.FirstName != null && req.body.FirstName != user.FirstName) {
                user.updateOne({ FirstName: req.body.FirstName })
                res.sendStatus(200)
            }

        }).catch(err => {
            res.send(err);
        })
    },

    checkAuthenticated(req, res, next) {

        passport.authenticate('local', (err, user, info) => {

            if (err) {
                throw err;
            } else {
                if (!user) {
                    res.status(401).send({message:"Vous n'êtes pas authorisé à visiter cette page sans vous être connecté"})
                } else {

                    req.logIn(user, err => {
                        if (err) throw err;

                        res.send(201, user)

                    })
                }
            }
        })
            (req, res, next);

    },
    async picture(req, res, next) {

        if (req.user != undefined) {
            if(req.file != undefined){
                const result = await cloudinary.uploader.upload(req.file.path)
                User.findOneAndUpdate({ Email: req.user.Email },{Picture:result.secure_url, Cloudinary_id: result.public_id}).then(()=>{
                    res.sendStatus(201)
                })
            }else {
                res.sendStatus(400)
            }
        } else {
            res.sendStatus(401)
        }
    },
    async UpdateImage(req, res, next) {
        try {
            let user = await User.findOne({ Email: req.user.Email });

            // await cloudinary.uploader.destroy(user.Cloudinary_id);
            const result = await cloudinary.uploader.upload(req.file.path);

            const data = {

                Picture: result.secure_url || user.Picture,

                Cloudinary_id: result.public_id || user.Picture
            };
            user = await User.findOneAndUpdate(req.user.Email, data, { new: true })
            res.json(user)

        } catch (err) {
             res.status(400).send({Erreur:err})
        }
    },
    checkUser(req,res,next){
       if(req.user != undefined){

           next()
       }else{
           res.sendStatus(401)
       }
    },
    connectedUser(req, res, next){

        if(req.user != undefined){
            res.send(req.user);
        }else{
            res.sendStatus(401)
        }

    },
    logout(req,res){
        req.session.destroy()
        if(req.session == undefined){
            res.sendStatus(401)
        }
    }
}



