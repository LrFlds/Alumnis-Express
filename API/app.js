const express = require('express');
const app = express();
const userRoute = require('./routes/userRoutes');
const mailRoute = require('./routes/mailRoutes');
const forumRoute = require('./routes/forumRoutes')
const passport = require('passport');
const session = require('express-session');
const localStrategy = require('passport-local').Strategy;
const cors = require('cors');
const cookieParser= require('cookie-parser');
const path = require('path');
const multer = require('multer');
const nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');


const upload = multer();
app.use(express.json());

app.use(cors({
    origin:['http://127.0.0.1:5500',"http://api.app.localhost:5500",'http://localhost:5500', 'http://localhost:3000', 'http://api.app.localhost:3000'],
    credentials:true,
}))
app.set('json spaces', 2);
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
}));
app.use(passport.initialize())
app.use(passport.session())
require('./Config/passport-config')(passport);
app.use(cookieParser());
app.use('/images', express.static(path.join(__dirname, 'images')))






//ROUTES

app.use('/user', userRoute);
app.use('/mail', mailRoute);
app.use('/forum', forumRoute);





module.exports = app