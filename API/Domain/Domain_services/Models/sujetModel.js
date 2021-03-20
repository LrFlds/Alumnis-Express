const mongoose = require('mongoose');
const SujetSchema = require('../../Schemas/sujetSchema');
const sujetService = require('../Schemas_Services/sujetSchemaService');

const SujetModel = mongoose.model('SujetModel', SujetSchema);
module.exports = SujetModel;