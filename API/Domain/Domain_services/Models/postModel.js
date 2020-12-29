const mongoose = require('mongoose');
const PostSchema = require('../../Schemas/postSchema');
 


const PostModel = mongoose.model('PostModel', PostSchema);
module.exports = PostModel; 