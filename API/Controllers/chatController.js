const socketIo = require('socket.io').sockets
const BDD = require('../Domain/Data/dbConnection');
const User = require('../Domain/Domain_services/Models/userModel');
 
socketIo.on('connection', () => {

    let chat = BDD.collection('chats');
    sendStatus = function(status){
        socket.emit('status', status)
    }

    chat.find().limit(250).sort({_id:1}).toArray((err,res)=>{
        if(err){
            throw err;
        }
        socket.emit('output', res)
    })
    socket.on('input', (data)=>{
        let name = req.user.FirstName
        let message = data.message;  

        if(req.user == undefined){
            res.sendStatus(401)
            if(message ==''){
                res.send('Veuillez entrer votre message')
            }
        }else{
            chat.insert({})
        }
    })
})