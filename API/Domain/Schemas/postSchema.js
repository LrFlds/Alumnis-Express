const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema ({
    CategoryTitle: { type: Schema.Types.ObjectId,ref: 'CategoryModel', required: true }, 
    SujetTitle: { type: Schema.Types.ObjectId,ref: 'SujetModel', required: true },
    PostTitle: { type: String, required: true },
    Date: { type: Date, required: true },
    Author: { type: Schema.Types.ObjectId, ref: 'UserModel',  required: true },
    Content: { type: String, required: true },
}); 

module.exports = PostSchema;