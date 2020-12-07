const User = require('../Domain/Domain_services/Models/userModel');
const localStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcrypt'); 


function initialize(passport, getUserByEmail){
    const authenticateUser= async ( Email, Password, done)=> {
        const user = getUserByEmail(Email)
        if(user == null){
            return done(null, false, {message: "Pas d'utilisateur avec cette adresse mail"})
        }
        try{
            if(await bcrypt.compare(Password, user.Password)){
                return done(null, user)
            } else {
                return done(null, false, {message: 'mot de passe incorrect'})
            }
        } catch (e) {
            return done (e)
        }
    }

    passport.use(new localStrategy({ usernameField: 'email'}, authenticateUser))
    passport.serializeUser((user,done)=> done(null, user.Email))
    passport.deserializeUser((Email, done)=>{
        return done(null, getUserByEmail(Email))
    })
}

module.exports = initialize(passport,
    Email => User.find(user => user.Email === Email)
    );

    