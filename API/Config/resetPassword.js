const nodemailer= require('nodemailer')
const dotenv= require('dotenv').config()


let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EXPEDITEUR,
        pass:process.env.PASS
    }
});

module.exports= transporter