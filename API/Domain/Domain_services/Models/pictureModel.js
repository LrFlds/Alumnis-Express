const mongoose = require('mongoose');
const PictureSchema = require('../../Schemas/pictureSchema');


const PictureModel = mongoose.model('PictureModel', PictureSchema);
module.exports = PictureModel;