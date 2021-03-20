const nodemailer= require('nodemailer')
const dotenv= require('dotenv').config()
const User = require('../Domain/Domain_services/Models/userModel');
const passport = require('passport');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const key = crypto.randomBytes(32);
const transporter = require('../Config/resetPassword');
const constantes = require('../Config/variables')
const jwt = require('jsonwebtoken')



/**
 * Send mail for reset password
 */

module.exports = {
    resetPassword(req, res, subject, message, user){
        User.find().then( result => {

            const reset = jwt.sign(key, process.env.SECRET_TOKEN_ACCESS);
            user.ResetPass.push(reset);
                user.ExpirePass = Date.now() + 3600000
                user.save().then(result => {
                    transporter.sendMail({
                        to: user.Email,
                        from:"no-reply@alumnis.simplon.com",
                        subject: subject,
                        html: message
                    })
                    return true;
                })
        })
            //TO DO : NE PAS OUBLIER DE METTRE URL AVEC LE TOKEN DANS LE MESSAGE VARIABLES.JS
        

        
    },
    newPassword(req, res){
        const newPassword = req.body.newPassword
        const sentToken = req.params.id
        User.findOne({ResetPass:sentToken, expirePass:{$gt:Date.now()}})
        .then(user => {
            if(!user){
                return res.status(422).json({error: "try again session expired"})
            }
            bcrypt.hash(newPassword,10).then(hashPassword => {
                user.Password = hashPassword
                user.ResetPass = undefined
                user.ExpirePass = undefined
                user.save().then((savedUser)=>{
                    res.json({message:"Mot de passe modifié"})
                })
            })
        }).catch(err => {
            res.status(400).send({Erreur:err})
        })
    }
}