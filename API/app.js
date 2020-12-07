const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const userRoute = require('./routes/userRoutes');


mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.set('json spaces', 2); 






//ROUTES

app.use('/user', userRoute);
