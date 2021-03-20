const CategorySchema = require('../../Schemas/categorySchema');
const SujetModel = require('../Models/sujetModel');


CategorySchema.pre('remove',async function(){
    SujetModel.deleteMany({_id:{$in:this.Sujet}},(err,ok)=>{
        if(err){
            throw err;
        }else{
            next();
        }
    });
})