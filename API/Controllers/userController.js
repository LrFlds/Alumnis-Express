
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
    updatePasswordUser(req, res) {
        const user = await User.findById(req.user._id)
        console.log("je vais niquer ta mère")
        if (req.body.NewPass != null && req.body.NewPass != undefined) {
            if (req.body.Password != null && req.body.NewPass != req.body.Password) {
                await bcrypt.compare(req.body.Password, client.Password, async (err, same) => {
                  if (err) {
                    res.status(500).send({ message: "Une erreur est survenue lors de la vérification de votre mot de passe" })
                  } else if (!same) {
                    res.status(400).send({ message: "Une erreur est survenue lors de la comparaison des mots de passe. Avez vous bien entré votre mot de passe actuel?" })
                  } else {
                    if (req.body.NewPass) {
                      const salt = await bcrypt.genSalt(10);
                      const hash = await bcrypt.hash(req.body.NewPass, salt);
                      await user.set("Password", hash)
                      client.save((err, user) => {
                        if (err) {
                          res.status(500).send({ message: 'Une erreur est survenue lors de la mise à jour.' })
                        } else {
                          res.status(200).send({ message: "Votre mot de passe a bien été mis à jour" })
                        }
                      })
                    } else {
                      res.status(400).send({ message: 'Le mot de passe doit contenir 8 charactères, une majuscule, un chiffre et un caractère spécial' })
                    }
                  }
                })
              } else {
                res.status(400).send({ message: "Veuillez entrer votre mot de passe actuel" })
              }
            } else {
              res.status(400).send({ message: "Un nouveau mot de passe est requis pour la mise à jour!" })
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



