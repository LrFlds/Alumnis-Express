const User = require('../Domain/Domain_services/Models/userModel');
const Sujet = require('../Domain/Domain_services/Models/sujetModel');
const Category = require('../Domain/Domain_services/Models/categoryModel');

module.exports = {

    getAllCategories(req, res){
        Category.find().then(result => {
            res.send(result)
        })
    },
    async getAllSujetByCategory(req,res){
        let tableSujets = []
        const category = await Category.findById(req.params.id)
        for(const sujetId of category.Sujet){
            const sujet = Sujet.findById(sujetId)
            tableSujets.push(sujet)
        }
        res.send(tableSujets)
        
    },
    createCategory(req,res){
        if(req.user.IsAdmin == true) {
            const NewCategorie = new Category({
                Title: req.body.Title, 
                Sujet: req.body.Sujet,
                Description: req.body.Description
            })
            NewCategorie.save((err, cate)=>{
                if(err){
                    res.send(err)
                } else {
                    res.sendStatus(201)
                }
            })
        } else {
            res.send("Vous n'avez pas les droits ! ah ah ah ")
        }
    },
    deleteCategory(req,res){
        if(req.user.IsAdmin != true) {
            res.send("Vous n'avez pas les droits")
        }else {
            Category.findOne({_id: req.params.id}).remove((err, cate)=>{
                if(err){
                    res.send(err)
                }else{
                    res.sendStatus(200)
                }
            })
        }
    },
    createSujet(req,res){
        if(req.user != undefined){
            const NewSujet = new Sujet({
                TitleSujet: req.body.TitleSujet, 
                Date: req.body.Date,
                Author: req.body.user,
                Post: req.body.Post
            })
            NewSujet.save((err, sujet)=> {
                if(err){
                    res.send(err)
                } else {
                    res.sendStatus(201)
                }
            })
        }
    },
    deleteSujet(req,res){
        if(req.user.IsAdmin != true) {
            res.send("Vous n'avez pas les droits")
        }else {
            Sujet.findOne({_id: req.params.id}).remove((err, sujet)=>{
                if(err){
                    res.send(err)
                }else{
                    res.sendStatus(200)
                }
            })
        }
    }














}