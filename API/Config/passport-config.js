const User = require('../Domain/Domain_services/Models/userModel');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');




module.exports = function (passport) {
    passport.use(
    new localStrategy(async(Email, Password, done)=> {
        try{ await User.findOne({Email:Email}, (err, user)=>{
            if(err)throw err;
            if(!user){
                console.log(user)
                return done(null, false);
            }

            bcrypt.compare(Password, user.Password, (err, result)=>{
                if(err) throw err;
                if(result){
                    console.log(user)
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


