const PostSchema = require('../../Schemas/postSchema');
const SujetModel = require('../Models/sujetModel');

PostSchema.pre('remove', async function(){
    const sujet = await SujetModel.findOne({Post:this._id});
    if(sujet){
        sujet.Post.splice(sujet.Post.indexOf(this._id),1);
        sujet.save((err,doc)=>{
            if(err){
                throw err;
            }else{
                next();
            }
        })
    }else{
        throw err;
    }
})