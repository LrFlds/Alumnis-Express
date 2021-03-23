const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema ({
    SujetTitle: { type: Schema.Types.ObjectId,ref: 'SujetModel', required: true },
    Date: { type: Date, required: true },
    Author: { type: Schema.Types.ObjectId, ref: 'UserModel',  required: true },
    Content: { type: String, required: true },
});

module.exports = PostSchema;