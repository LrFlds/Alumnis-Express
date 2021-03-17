const User = require('../Domain/Domain_services/Models/userModel');
const Post = require('../Domain/Domain_services/Models/postModel');
const SujetModel = require('../Domain/Domain_services/Models/sujetModel');



module.exports = {

    async addPost(req, res) {
        if (req.user) {

            const date = Date.now();
            const today = new Date(date);
            const newPost = new Post({
                CategoryTitle: req.body.CategoryTitle,
                SujetTitle: req.body.SujetTitle,
                PostTitle: req.body.PostTitle,
                Date: today.toUTCString() ,
                Author: req.user, //utilisateur connecté
                Content: req.body.Content
            })
            newPost.save(async(err, newPost) => {
                if (err) {
                    res.send(err)
                } else {
                    const sujet = await SujetModel.findById(req.params.id);
                    sujet.Post.push(newPost._id);
                    sujet.save((err,doc)=>{
                        if(err){
                            res.status(500).send({message:"Une erreur est survenue"})
                        }else{
                             res.send("Post créé" + newPost)
                        }
                    })

                }
            })
        } else {
            res.status(401).send({ message: "Vous devez être connecté" })
        }

    },
    updtatePost(req, res) {
        Post.findById({ _Id: req.body.Id }).then(result => {
            if (!result) {
                res.send('Houston, we have a problem')
            } else {
                if (result.Author != req.body.user) {
                    res.sendStatus(403)
                } else {
                    result.Content = req.body.Content;
                    result.save((err, okPost) => {
                        if (err) {
                            res.send(err)
                        } else {
                            res.send('Ok' + okPost)
                        }
                    })
                }
            }
        })
    },

  async  deletePost(req, res) {
        if (req.user) {
            const post = await Post.findById(req.params.id);
            if (req.user == post.Author || req.user.isAdmin) {
                post.remove((err, doc) => {
                    if (err) {
                        res.status(500).send({ message: "Une erreur est survenue lors de la supression du post" })
                    } else {
                        res.status(200).send({ message: "Post supprimé avec succès." })
                    }
                })
            } else {
                res.status(403).send({ message: "Seul l'auteur du post peut le supprimer" })
            }
        } else {
            res.status(401).send({ message: "Vous devez être connecté" })
        }
    },

   async getAllPost(req, res) {
        if (req.user) {
            const posts = await Post.find({});
            if (posts.length != 0) {
                res.status(200).send({ message: posts })
            } else {
                res.status(204).send({ message: "Aucun post à afficher" })
            }
        } else {
            res.status(401).send({ message: "Vous devez être connecté" })
        }
    },
   async getPostById(req, res) {
        if (req.user) {
            const post = await Post.findById(req.params.id);
            if (post != null) {
                post.populate({path:"Author", model:User, select:'-Password' },(err,doc)=>{
                    if(err){
                        res.status(500).send({message:"Une erreur est survenue"})
                    }else{
                        res.status(200).send({ message: doc })
                    }
                })

            } else {
                res.status(400).send({ message: 'Aucun post trouvé' })
            }
        } else {
            res.status(401).send({ message: "Vous devez être connecté" })
        }
    }



}