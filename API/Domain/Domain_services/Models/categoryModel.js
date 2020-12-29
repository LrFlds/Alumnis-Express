const mongoose = require('mongoose');
const CategorySchema = require('../../Schemas/categorySchema');


const CategoryModel = mongoose.model('CategoryModel', CategorySchema);
module.exports = CategoryModel;