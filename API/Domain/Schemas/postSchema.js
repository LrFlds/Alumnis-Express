const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema ({
    CategoryTitle: { type: String, required: true }, 
    SubCategoryTitle: { type: String, required: true },
    PostTitle: { type: String, required: true },
    Date: { type: Number, required: true },
    Author: { type: Schema.Types.ObjectId, ref: 'UserModel',  required: true },// A VERIFIER USERMODEL
    Content: { type: String, required: true },
}); 

module.exports = PostSchema;