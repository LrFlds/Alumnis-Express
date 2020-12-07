const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const userRoute = require('./routes/userRoutes');
const passConfig = require('./Config/passport-config');
const passport = require('passport');
const session = require('express-session');
const UserController = require('./Controllers/userController')

app.use(bodyParser.json());


mongoose.Promise = global.Promise;

app.set('json spaces', 2); 
app.use(express.urlencoded({ extended: false}));
app.use(passport.initialize())
app.use(passport.session())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
    
}));

passConfig(passport, 
    UserController.turlututu()
    )





//ROUTES

app.use('/user', userRoute);





module.exports = app