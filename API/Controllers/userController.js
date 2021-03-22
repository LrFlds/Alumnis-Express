
const User = require('../Domain/Domain_services/Models/userModel');
const Post = require('../Domain/Domain_services/Models/postModel');
const bcrypt = require('bcrypt');
const BDD = require('../Domain/Data/dbConnection');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cloudinary = require('../Config/cloudinary');
const regexMail = /^[a-zA-Z0-9._-][^<§!:/;,\|()"#`~&=+%µ*$£%>]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const mailController = require('../Controllers/mailController');
const { resetPassword } = require('../Controllers/mailController');
const Constantes = require("../Config/variables")
const { subjectActivate, messageActivate, subjectMdp, messageMdp } = require('../Config/variables');
const crypto= require('crypto')
const key = crypto.randomBytes(32);
const jwt = require('jsonwebtoken')
const transporter = require('../Config/resetPassword');






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
                    Password: key,
                    Fabric: req.body.Fabric,
                    Year: req.body.Year,
                    TypeFormation: req.body.TypeFormation,
                    Techno: req.body.Techno,
                    Description: req.body.Description,
                    Company: req.body.Company,
                    PostList: req.body.PostList,
                    Status: req.body.Status,
                    IsAdmin: req.body.IsAdmin
                }) 
                newUser.save((err, user) => {
                    if (err) {
                        res.status(400).send({ Erreur: err })

                    } else {
                        const reset = jwt.sign(key, process.env.SECRET_TOKEN_ACCESS);
                        user.ResetPass= reset
                        user.ExpirePass = Date.now() + 3600000
                        user.save().then(result => {
                            transporter.sendMail({
                            to: user.Email,
                            from:"no-reply@alumnis.simplon.com",
                            subject: "Activation de votre profil Alumnis",
                            html: `
                            <p> Bonjour ${user.FirstName},</p>

                            <p>Bienvenue sur notre site réservé exclusivement aux apprenants et alumnis de Simplon.</p>
                            <p> Votre profil a été préalablement créé, vous devrez le complêter des votre première connexion. Il vous suffit de l'activer en cliquant <a href="http://localhost:3000/mail/reset/${reset}">içi</a>, vous serez redirigé vers la page de réinitialisation de mot de passe.</p>
                            <p>Nous comptons sur vous pour faire vivre ce site, mais aussi pour être cordiaux.</p>
                            <p>Des modérateurs seront à votre disposition en cas de problèmes.</p>
                            <p> à bientôt sur Alumnis</p>
                            <p> L'équipe d'ALUMNIS, Matieu, Quentin et Laura.</p>`
                    })
                    return true;
                })
                        res.status(200).send({message: "L'utilisateur a été créé "})
                        
                    }
                })
            } else {

                res.status(400).send({ message: 'Utilisateur déjà connu' })
            }
        })
    },
    deleteUser(req, res) {
        if (res.user.Email == req.body.Email || req.user.IsAdmin) {
            User.findOne({ Email: req.body.Email }).then(result => {
                if (result == null) {
                    res.status(204).send({ message: "Aucun utilisateur trouvé" });
                } else {
                    result.remove((err, user) => {
                        if (err) {
                            res.status(400).send({ Erreur: err });
                        } else {
                            res.status(200).send({ message: okResponse });
                        }
                    })
                }
            })
        }else{
            res.status(401).send({message:'Vous devez être le propriétaire du compte ou un administrateur pour supprimer ce compte'})
        }

    },
    async updateUser(req, res) {
        if (req.user) {
            if (req.user.Email == req.body.Email && req.body.Password.replace(/\s/g, "").length > 0) {
                const same = await bcrypt.compare(req.body.Password, req.user.Password);
                if (same) {
                    const entries = Object.keys(req.body);
                    let updates = {};
                    let message = "OK";
                    let status = 200;
                    for (let i = 0; i < entries.length; i++) {
                        const totalCaracter = Object.values(req.body)[i].replace(/\s/g, "").length;
                        if (totalCaracter > 0) {
                            if (entries[i] == "newEmail") {
                                if (regexMail.test(Object.values(req.body)[i])) {
                                    const user = await User.findOne({ Email: Object.values(req.body)[i] });
                                    if (!user) {
                                        updates["Email"] = Object.values(req.body)[i];
                                    } else {
                                        message = "Email déjà utilisé";
                                        status = 400;
                                        break;
                                    }
                                } else {
                                    message = "Ceci n'est pas une adresse mail valide";
                                    status = 400;
                                    break;
                                }
                            } else if (entries[i] == "newPassword") {
                                if (regexPass.test(Object.values(req.body)[i])) {
                                    const salt = await bcrypt.genSalt(10);
                                    const hash = await bcrypt.hash(Object.values(req.body)[i], salt);
                                    updates["Password"] = hash;
                                } else {
                                    message = "Ceci n'est pas un mot de passe valide";
                                    status = 400;
                                    break;
                                }
                            } else {
                                updates[entries[i]] = Object.values(req.body)[i];
                            }
                        }
                    }
                    if (status != 400) {
                        User.update({ _id: req.user._id }, { $set: updates }, (err, success) => {
                            if (err) {
                                res.status(500).send({ message: internalError });
                            } else {
                                res.status(status).send({ message: "Mise à jour réussie" });
                            }
                        })
                    } else {
                        res.status(status).send({ message: message });
                    }
                } else {
                    res.status(400).send({ message: "Mot de passe erroné" })
                }
            } else {
                res.status(400).send({ message: "Des informations sont requises ou incorrectes" })
            }
        } else {
            res.status(401).send({ message: "Vous devez être connecté" })
        }
    },
    updateUserAdmin(req, res) {
        User.findOne({ Email: req.body.Email }).then(user => {
            if (req.body.Name != null && req.body.Name != user.Name) {
                user.updateOne({ Name: req.body.Name })
                res.status(200).send({ message: okResponse });
            }
            if (req.body.FirstName != null && req.body.FirstName != user.FirstName) {
                user.updateOne({ FirstName: req.body.FirstName })
                res.status(200).send({ message: okResponse });
            }

        }).catch(err => {
            res.status(400).send({ message: err });
        })
    },

    checkAuthenticated(req, res, next) {

        passport.authenticate('local', (err, user, info) => {

            if (err) {
                throw err;
            } else {
                if (!user) {
                    res.status(401).send({ message: "Vous n'êtes pas authorisé à visiter cette page sans vous être connecté" })
                } else {

                    req.logIn(user, err => {
                        if (err) throw err;

                        res.status(200).send({ message: user })

                    })
                }
            }
        })
            (req, res, next);

    },
    async picture(req, res, next) {
        if (req.user != undefined) {
            if (req.file != undefined) {
                const result = await cloudinary.uploader.upload(req.file.path)
                User.findOneAndUpdate({ Email: req.user.Email }, { Picture: result.secure_url, Cloudinary_id: result.public_id }).then(() => {
                    res.status(201).send({ message: "Avatar mis à jour" });
                })
            } else {
                res.status(400).send({ message: "Aucun fichier à mettre à jour" });
            }
        } else {
            res.status(401).send({ message: loginError });
        }
    },
    checkUser(req, res, next) {
        if (req.user != undefined) {
            next()
        } else {
            res.status(401).send({ message: 'a refaire cause conflict' });
        }
    },
    connectedUser(req, res, next) {
        if (req.user != undefined) {
            res.send(req.user);
        } else {
            res.status(401).send({ message: loginError });
        }

    },
    logout(req, res) {
        req.session.destroy()
        if (req.session == undefined) {
            res.status(401).send({ message: loginError });
        }
    }
}



