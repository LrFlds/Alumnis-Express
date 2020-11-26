const mongoose = require('mongoose');
const PostSchema = require('../../Schemas/postSchema');
const Schema = mongoose.Schema; 


const PostModel = mongoose.model('PostModel', PostSchema);
module.exports = PostModel; 