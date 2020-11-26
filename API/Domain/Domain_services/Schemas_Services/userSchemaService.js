const UserSchema = require('../../Schemas/userSchema');
const bcrypt = require('bcrypt'); 

UserSchema.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(10); 
        const hash = await bcrypt.hash(this.Password, salt);
        this.Password = hash;
        next();
    } catch (err) {
        next(err)
    }
});