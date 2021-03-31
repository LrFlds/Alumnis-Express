import { UserSchema } from './../Schemas/userSchema';
import * as mongoose from 'mongoose';




    module.exports = mongoose.model('UserModel',UserSchema.UserSchema);
