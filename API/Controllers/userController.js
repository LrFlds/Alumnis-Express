
const User = require('../Domain/Domain_services/Models/userModel');
const Post = require('../Domain/Domain_services/Models/postModel');
const bcrypt = require('bcrypt');
const BDD = require('../Domain/Data/dbConnection');
const passport = require('passport')




module.exports = {
    getAllUsers(req, res) {
        User.find().then(result => {
            res.send(result)
        })
    },
    getUser(req, res) {
        const id = req.params.id
        User.findOne({ _id: id }).then(result => {
            res.json(result)
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
    // updateUser(req,res) {
    //     User.findOne({ Email: req.body.Email }).then(async (user) => {
    //         if (user.Description != req.body.Description && req.body.Description != null) {
    //             user.updateOne({ Description: req.body.Description }).then().catch(error => {
    //                 res.send(error)
    //             });
    //         } if (user.Company != req.body.Company && req.body.Company != null) {
    //             user.updateOne({ Company: req.body.Company }).then().catch(error => {
    //                 res.send(error)
    //             });
    //         } if (user.Techno != req.body.Techno && req.body.Techno != null) {
    //             user.updateOne({ Techno: req.body.Techno }).then().catch(error => {
    //                 res.send(error)
    //             })
    //         } if (req.body.Password != null && req.body.newPassword != null && req.body.Password != req.body.newPassword) {
    //             await bcrypt.compare(req.body.Password, user.Password, (err, match) => {
    //                 if (err) {
    //                     res.send(err)
    //                 } else {
    //                    await bcrypt.hashPassword(req.body.Password, 10, (err, hash) => {
    //                         if (err) {
    //                             res.send(err)
    //                         } else {
    //                             user.updateOne({ Password: hash }).then().catch(error => {
    //                                 res.send(error)
    //                             })
    //                         }
    //                     })
    //                 }
    //             })
    //         } if (req.body.Email != null && req.body.newEmail != null && req.body.Email != req.body.newEmail) {
    //             await bcrypt.compare(req.body.Password, user.Password, (err, match) => {
    //                 if (err) {
    //                     res.send(err)
    //                 } else {
    //                     user.updateOne({ Email: req.body.newMail }).then(result=>{
    //                         res.sendStatus(200)
    //                     }).catch(error => {
    //                         res.send(error)
    //                     })
    //                 }
    //             })
    //     }
    //     })
    // },
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
                console.log(err)
                throw err;
            } else {
                if (!user) {
                    res.send('No user exist ')
                } else {
                    req.logIn(user, err => {
                        if (err) throw err;
                        res.send('Authentification correct ')
                        console.log(req.user)
                    })
                }
            }
        })
            (req, res, next);

    }


}



