const nodemailer= require('nodemailer')
const dotenv= require('dotenv').config()
const User = require('../Domain/Domain_services/Models/userModel');
const passport = require('passport');
const bcrypt = require('bcrypt');
const crypto = require('crypto')
const transporter = require('../Config/resetPassword')



module.exports = {
    resetPassword(req, res){
        crypto.randomBytes(32,(err,buffer)=> {
            if(err){
                console.log(err)
            }
            const reset = buffer.toString('hex')
            User.findOne({Email:req.body.Email}).then(user => {
                if(!user){
                    console.log("la c'est bon !")
                    return res.status(422).json({error:"L'utilisateur n'existe pas avec cet email"})
                }else{
                user.ResetPass = reset
                user.ExpirePass = Date.now() + 3600000
                user.save().then(result => {
                    transporter.sendMail({
                        to:'magniez.justine.pro@gmail.com',
                        from:"no-reply@alumnis.simplon.com",
                        subject:'Réïnitialisation du mot de passe',
                        html:`
                        <p>Vous souhaitez réïnitialiser votre mot de passe</p>
                        <h5>Cliquez <a href="http://localhost:3000/mail/reset/${reset}">içi</a> pour réïnitialiser votre mot de passe</h5>

                        <p>L'équipe Alumnis Simplon</p>
                        `
                    })
                    res.json({message:" Vérifiez vos emails"})
                })
            }    
        })
            
        })
    },
    newPassword(req, res){
        const newPassword = req.body.newPassword
        const sentToken = req.body.reset
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
            console.log(err)
        })
    }
}