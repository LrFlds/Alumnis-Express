const User = require('../Domain/Domain_services/Models/userModel');
const Post = require('../Domain/Domain_services/Models/postModel');


module.exports = {

    addPost(req,res){
        const newPost = new Post ({
            CategoryTitle: req.body.CategoryTitle,
            SubCategoryTitle : req.body.SubCategoryTitle,
            PostTitle: req.body.PostTitle,
            Date: req.body.Date,
            Author : req.body.User, //utilisateur connecté
            Content: req.body.Content
        })
        newPost.save((err, newPost) => {
            if(err){
                res.send(err)
            }else{
                res.send("Post créé"+ newPost)
            }
        })
    },
    updtatePost(req,res){
        Post.findById({_Id:req.body.Id}).then(result=>{
            if(!result){
                res.send('Houston, we have a problem')
            }else{
                if(result.Author != req.body.user){
                    res.sendStatus(403)
                }else{
                    result.Content = req.body.Content;
                    result.save((err,okPost)=>{
                        if(err){
                            res.send(err)
                        }else{
                            res.send('Ok'+ okPost)
                        }
                    })
                }
            }
        })
    }





}