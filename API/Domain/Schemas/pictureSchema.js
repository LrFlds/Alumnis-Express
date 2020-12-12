const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PictureSchema = new Schema({
    Picture: { type: String }, 
   
})

module.exports = PictureSchema;