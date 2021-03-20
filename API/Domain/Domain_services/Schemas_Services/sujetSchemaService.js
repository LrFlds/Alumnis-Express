const SujetSchema = require('../../Schemas/sujetSchema');
const PostModel = require('../Models/postModel');
const CategoryModel = require('../Models/categoryModel');

SujetSchema.pre('remove',async function(){
    PostModel.deleteMany({_id:{$in:this.Post}},async(err,ok)=>{
        if(err){
            throw err;
        }else{
           const category = await CategoryModel.findOne({Sujet:this._id});
           category.Sujet.splice(category.Sujet.indexOf(this._id,1));
           category.save((err,doc)=>{
               if(err){
                   throw err
               }else{
                   next();
               }
           })
        }
    });
})