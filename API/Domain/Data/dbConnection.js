const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const myEnv = dotenv.config();
dotenvExpand(myEnv);
mongoose.set('useFindAndModify', false);
mongoose.connect(`${process.env.CONNECTION_STRING}`, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', () => {
    console.log('Connection Database okay');
})
.on('error', (error) => {
    console.log('Connection Failed' + error);
});

