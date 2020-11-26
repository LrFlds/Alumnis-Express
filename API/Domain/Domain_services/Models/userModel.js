const mongoose = require('mongoose');
const UserSchema = require('../../Schemas/userSchema');

const UserModel = mongoose.model('UserModel', UserSchema);
module.exports = UserModel;