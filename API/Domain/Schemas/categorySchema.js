const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema ({
    Title: { type: String, required: true }, 
    Sujet: [{ type: Schema.Types.ObjectId,ref: 'SujetModel', required: true }],
    Description: { type: String, required: true}
}); 

module.exports = CategorySchema;