const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.set('json spaces', 2); 

