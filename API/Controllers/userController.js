
const User = require('../Domain/Domain_services/Models/userModel');
const Post = require('../Domain/Domain_services/Models/postModel');
const Picture = require('../Domain/Domain_services/Models/pictureModel')
const bcrypt = require('bcrypt');
const BDD = require('../Domain/Data/dbConnection');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cloudinary = require('../Config/cloudinary');
// const sharp = require('sharp')





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
                    Picture: req.body.Picture,
                    Cloudinary_id: req.body.Cloudinary_id,
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
        User.findOne({ Email: req.user.Email }).then(async (user) => {
            if (user.Description != req.body.Description && req.body.Description != null) {
                user.updateOne({ Description: req.body.Description }).then().catch(error => {
                    res.send(error)
                });
            } if (user.Company != req.body.Company && req.body.Company != null) {
                user.updateOne({ Company: req.body.Company }).then().catch(error => {
                    res.send(error)
                });
            } if (user.Techno != req.body.Techno && req.body.Techno != null) {
                user.updateOne({ Techno: req.body.Techno }).then().catch(error => {
                    res.send(error)
                })
            } if (req.body.Password != null && req.body.newPassword != null && req.body.Password != req.body.newPassword) {
                bcrypt.compare(req.body.Password, user.Password, (err, match) => {
                    if (err) {
                        res.send(err)
                    } else {
                        bcrypt.hashPassword(req.body.Password, 10, (err, hash) => {
                            if (err) {
                                res.send(err)
                            } else {
                                user.updateOne({ Password: hash }).then().catch(error => {
                                    res.send(error)
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
                        user.updateOne({ Email: req.body.newMail }).then(result => {
                            res.sendStatus(200)
                        }).catch(error => {
                            res.send(error)
                        })
                    }
                })
            }
        })
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
                    res.send(401, "Ta soeur !!!!")
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
                console.log("t'es ici petit kiki")
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
            console.log("t'es la ?")
            const data = {

                Picture: result.secure_url || user.Picture,

                Cloudinary_id: result.public_id || user.Picture
            };
            user = await User.findOneAndUpdate(req.user.Email, data, { new: true })
            res.json(user)

        } catch (err) {
            console.log(err)
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



