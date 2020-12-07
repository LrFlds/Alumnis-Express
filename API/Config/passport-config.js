const User = require('../Domain/Domain_services/Models/userModel');
const localStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcrypt'); 




module.exports = function (passport) {
    new localStrategy((Email, Password, done)=> {
        User.findOne({Email: Email}, (err, user)=>{
            if(err)throw err;
            if(!user) return done(null, false);
            bcrypt.compare(Password, user.Password, (err, result)=>{
                if(err) throw err;
                if(result){
                    return done(null, user);
                }else{
                    return done(null, false);
                }
            });
        });
    })
    passport.serializeUser((user, cb)=>{
        cb(null, user.id)
    })
    passport.deserializeUser((id, cb)=>{
        User.findOne({_id: id}, (err, user)=>{
            cb(err, user);
        });
    });
};


    