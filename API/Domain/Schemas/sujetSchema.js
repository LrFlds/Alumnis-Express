const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userModel = require('../Domain_services/Models/userModel');
const postModel = require('../Domain_services/Models/postModel')


const SujetSchema = new Schema ({
    TitleSujet: { type: String, required: true }, 
    Date: { type: Date, required: true},
    Author: { type: Schema.Types.ObjectId,ref: 'UserModel', required: true},
    Post: [{ type: Schema.Types.ObjectId,ref: 'PostModel', required: true}]
}); 

module.exports = SujetSchema;