const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const userRoute = require('./routes/userRoutes');
const initialize = require('./Config/passport-config');
const passport = require('passport');
const session = require('express-session');


initialize()

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.set('json spaces', 2); 
app.use(express.urlencoded({ extended: false}));
app.use(passport.session())
app.use(passport.initialize())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false

}));






//ROUTES

app.use('/user', userRoute);
