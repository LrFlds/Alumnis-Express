const mongoose = require('mongoose');
const UserSchema = require('../../Schemas/userSchema');
const userService= require('../Schemas_Services/userSchemaService')

const UserModel = mongoose.model('UserModel', UserSchema);
module.exports = UserModel;