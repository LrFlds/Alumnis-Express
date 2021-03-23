const mongoose = require('mongoose');
const CategorySchema = require('../../Schemas/categorySchema');
const categorytService = require('../Schemas_Services/categorySchemaService');

const CategoryModel = mongoose.model('CategoryModel', CategorySchema);
module.exports = CategoryModel;