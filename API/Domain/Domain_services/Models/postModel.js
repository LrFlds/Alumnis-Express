const mongoose = require('mongoose');
const PostSchema = require('../../Schemas/postSchema');
const postSchemaService = require('../Schemas_Services/postSchemaService');


const PostModel = mongoose.model('PostModel', PostSchema);
module.exports = PostModel;