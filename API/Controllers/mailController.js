const nodemailer= require('nodemailer')
const dotenv= require('dotenv').config()



module.exports = {
    mailAutoInscription(res){
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'',
                pass:''
            }
        });
        let mailOptions={
            from:'',
            to:'',
            subject:'',
            text:''
        };
        transporter.sendMail(mailOptions).then((response)=>{
            res.send('Eamil envoyé')
        })
        .catch((error)=>{
            console.log('Error:', error)
        })
    }
}