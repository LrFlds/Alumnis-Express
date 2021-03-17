const User = require('../Domain/Domain_services/Models/userModel');
const Sujet = require('../Domain/Domain_services/Models/sujetModel');
const Category = require('../Domain/Domain_services/Models/categoryModel');
const Post = require('../Domain/Domain_services/Models/postModel');
module.exports = {


    // Categories
    getAllCategories(req, res){
        Category.find().then(result => {
            res.send(result)
        })
    },

    async getCategoryById(req,res){
       const category = await Category.findById(req.params.id);
       if(category != null){
         category.populate({path:"Sujet",model:Sujet},(err,doc)=>{
             if(err){
                 res.status(500).send({message:"Une erreur est survenue lors de la recherche des sujets"})
             }else{
                 console.log(doc)
                 res.status(200).send({message:doc});
             }
         });


       }else{
           res.status(400).send({message:"Aucune catégorie trouvée"})
       }
    },
    async getAllSujetByCategory(req,res){
       const category = await Category.findById(req.params.id);
       const sujets = await Sujet.find({_id:{$in:category.Sujet}});
       if(sujets.length != 0){
           res.status(200).send({message: sujets})
       }else{
           res.status(400).send({message:"Pas de sujet"})
       }
    },
    createCategory(req,res){

            const NewCategory = new Category({
                Title: req.body.Title,
                Description: req.body.Description
            })
            NewCategory.save((err, cate)=>{
                if(err){
                    res.send(err)
                } else {
                    res.sendStatus(201)
                }
            })

    },
    deleteCategory(req,res){


            Category.findOne({_id: req.params.id}).remove((err, cate)=>{
                if(err){
                    res.send(err)
                }else{
                    res.sendStatus(200)
                }
            })

    },

    //Sujets
    async createSujet(req,res){
        if(req.user != undefined){
            const date = Date.now();
            const today = new Date(date);
            const NewSujet = new Sujet({
                TitleSujet: req.body.TitleSujet,
                Date: today.toUTCString(),
                Author: req.user
            })
            NewSujet.save(async(err, sujet)=> {
                if(err){
                    res.send(err)
                } else {
                    const category = await Category.findById(req.params.id);
                    category.Sujet.push(NewSujet._id);
                    category.save((err,category)=>{
                        if(err){
                            res.send(err)
                        }else{
                            res.sendStatus(201)
                        }
                    })

                }
            })
        }else{
            res.send("Utilisateur inconnu")
        }
    },
   async getSujetById(req,res){
        const sujet = await Sujet.findById(req.params.id);
        if(sujet != null){
          sujet.populate({path:"Post",model:Post},(err,doc)=>{
              if(err){
                  res.status(500).send({message:"Une erreur est survenue"})
              }else{
                    console.log(doc.Post)
                   doc.populate({path:"Author", model:User, select:'-Password' },(err,doc2)=>{
                    if(err){
                        res.status(500).send({message:"Une erreur est survenue"})
                    }else{
                        res.status(200).send({ message: doc2 })
                    }
                })
              }
          });

        }else{
            res.status(400).send({message:"Aucune catégorie trouvée"})
        }
    },
    deleteSujet(req,res){

            Sujet.findOne({_id: req.params.id}).remove((err, sujet)=>{
                if(err){
                    res.send(err)
                }else{
                    res.sendStatus(200)
                }
            })

    }














}