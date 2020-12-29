const mongoose = require('mongoose');
const SujetSchema = require('../../Schemas/sujetSchema');


const SujetModel = mongoose.model('SujetModel', SujetSchema);
module.exports = SujetModel;