const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()
const User = require('../Domain/Domain_services/Models/userModel');
const passport = require('passport');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const transporter = require('../Config/resetPassword');
const constantes = require('../Config/variables')


/**
 * Send mail for reset password
 */

module.exports = {
    resetPassword(req, res, subject, message) {
        crypto.randomBytes(32, (err, buffer) => {
            if (err) {
                res.status(400).send({ Erreur: err })
            }
            const reset = buffer.toString('hex')
            User.findOne({ Email: req.body.Email }).then(user => {
                if (!user) {
                    return res.status(422).json({ error: "L'utilisateur n'existe pas avec cet email" })
                } else {
                    user.ResetPass = reset
                    user.ExpirePass = Date.now() + 3600000
                    user.save().then(result => {
                        transporter.sendMail({
                            to: user.Email,
                            from: "no-reply@alumnis.simplon.com",
                            subject: subject,
                            html: message
                        })
                        res.json({ message: " Vérifiez vos emails" })
                    })
                }
            })

        })
    },

    newPassword(req, res) {
        const newPassword = req.body.newPassword
        const sentToken = req.params.id
        User.findOne({ ResetPass: sentToken, expirePass: { $gt: Date.now() } })
            .then(user => {
                if (!user) {
                    return res.status(422).json({ error: "try again session expired" })
                }
                bcrypt.hash(newPassword, 10).then(hashPassword => {
                    user.Password = hashPassword
                    user.ResetPass = undefined
                    user.ExpirePass = undefined
                    user.save().then((savedUser) => {
                        res.json({ message: "Mot de passe modifié" })
                    })
                })
            }).catch(err => {
                res.status(400).send({ Erreur: err })
            })
    }
}