const User = require('../Domain/Domain_services/Models/userModel');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');




module.exports = function (passport) {
    passport.use(
    new localStrategy({usernameField:"Email",passwordField:"Password"},async(username, password, done)=> {
        try{ await User.findOne({Email:username}, (err, user)=>{
            if(err)throw err;
            if(!user){
                return done(null, false);
            }

            bcrypt.compare(password, user.Password, (err, result)=>{
                if(err) throw err;
                if(result){
                    return done(null, user);
                }else{
                    return done(null, false);
                }
            });
        });
    }catch(err){
        console.log(err)
    }}))
    passport.serializeUser((user, cb)=>{
        cb(null, user.id)
    })
    passport.deserializeUser((id, cb)=>{
        User.findOne({_id: id}, (err, user)=>{
            cb(err, user);
        });
    })

    };


