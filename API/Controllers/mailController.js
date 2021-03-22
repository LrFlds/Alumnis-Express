const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()
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
    resetPassword(req, res){

         User.findOne(req.body.email).then( (user) => {
         if(!user){
           logError("Mauvaise adresse mail lors du reset de mot de passe",req)
           res.status(400).send({ message: "Le mail renseigné est incorrecte. Si votre mail est perdu, utilisez la fonction 'Mot de passe oublié'." })
         } else {
   
           const token = jwt.sign(key, process.env.SECRET_TOKEN_ACCESS);
           ResetPass= token;
           let mailOptions = {
             from:"no-reply@alumnis.simplon.com",
             to: req.body.Email,
             subject: "Réinitialisation de mot de passe",
             html:
             `Bonjour ${user.FirstName}, <br/>
             <p>Veuillez trouver ci joint le lien afin de vous créer un nouveau mot de passe : <a href="http://localhost:3000/mail/reset/${token}">içi</a></p>
             <p> à bientôt sur Alumnis</p>
             <p> L'équipe d'ALUMNIS, Matieu, Quentin et Laura.</p>`
           }
           
           user.save().then( result => {
             transporter.sendMail(mailOptions, (err, info) => {
               if(err){
                 console.log(err);
                 res.status(500).send({message: err});
               } else {
                 res.stauts(200).send({message: "Email envoyé"})
               }
             })
             res.status(200).send({message: "Vérifier vos mails"})
             
           })
           
         }
       })
       
     },

    newPassword(req, res) {
        const newPassword = req.body.newPassword
        const sentToken = req.params.id
        User.findOne({ ResetPass: sentToken, expirePass: { $gt: Date.now() } })
            .then(user => {
                if (!user) {
                    return res.status(422).send({ error: "try again session expired" })
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