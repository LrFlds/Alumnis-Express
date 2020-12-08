const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoutes');
const passport = require('passport');
const session = require('express-session');
const UserController = require('./Controllers/userController');
const localStrategy = require('passport-local').Strategy;
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(express.json());


mongoose.Promise = global.Promise;
app.use(cors({
    origin:'http://127.0.0.1:5500',
    credentials:true
}))
app.set('json spaces', 2);
app.use(express.urlencoded({ extended: false}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true

}));
app.use(passport.initialize())
app.use(passport.session())
require('./Config/passport-config')(passport);
app.use(cookieParser(process.env.SESSION_SECRET))






//ROUTES

app.use('/user', userRoute);





module.exports = app