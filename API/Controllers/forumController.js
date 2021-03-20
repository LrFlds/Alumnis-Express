const User = require('../Domain/Domain_services/Models/userModel');
const Sujet = require('../Domain/Domain_services/Models/sujetModel');
const Category = require('../Domain/Domain_services/Models/categoryModel');
const Post = require('../Domain/Domain_services/Models/postModel');
const { internalError, okResponse, loginError, adminError } = require('../Config/variables');


module.exports = {


    // Categories
    async getAllCategories(req, res) {
        const categories = await Category.find();
        const categoriesWithLastSubjectAndNumberOfPosts = [];
        for (let categorie of categories) {
            const subjects = await Sujet.find({ _id: { $in: categorie.Sujet } });
            if (subjects.length != 0) {
                const lastSubject = await subjects.reverse()[0].populate({ path: "Author", model: User, select: '-Password' }).execPopulate()
                let numberOfPost = 0;
                subjects.forEach(subject => { numberOfPost += subject.Post.length })
                const finalCategorie = {
                    categorie: categorie,
                    lastSubject: lastSubject,
                    numberOfPost: numberOfPost
                }
                categoriesWithLastSubjectAndNumberOfPosts.push(finalCategorie)
            } else {
                const finalCategorie = {
                    categorie: categorie,
                    lastSubject: {
                        Title: "Aucun sujet dans cette catégorie",
                        Date: "",
                        Author: {
                            Name: "",
                            FirstName: "",
                            Picture: ""
                        },
                    },
                    numberOfPost: 0
                }
                categoriesWithLastSubjectAndNumberOfPosts.push(finalCategorie);
            }

        }
        res.send(categoriesWithLastSubjectAndNumberOfPosts)
    },

    async getCategoryById(req, res) {
        const category = await Category.findById(req.params.id);
        if (category != null) {
            const categoryWithSubject = await category.populate({ path: "Sujet", model: Sujet }).execPopulate();
            for (let subject of categoryWithSubject.Sujet) {
                await subject.populate({ path: "Author", model: User, select: "-Password" }).execPopulate();
                const subjectWithPosts = await subject.populate({ path: "Post", model: Post }).execPopulate();
                for (let post of subjectWithPosts.Post) {
                    await post.populate({ path: "Author", model: User, select: "-Password" }).execPopulate();
                }
            }
            res.status(200).send({ message: category })

        } else {
            res.status(400).send({ message: "Aucune catégorie trouvée" })
        }
    },
    async getAllSujetByCategory(req, res) {
        const category = await Category.findById(req.params.id);
        const sujets = await Sujet.find({ _id: { $in: category.Sujet } });
        if (sujets.length != 0) {
            res.status(200).send({ message: sujets })
        } else {
            res.status(400).send({ message: "Pas de sujet" })
        }
    },
    createCategory(req, res) {
        if(req.user && req.user.isAdmin){
            const NewCategory = new Category({
            Title: req.body.Title,
            Description: req.body.Description
        })
        NewCategory.save((err, cate) => {
            if (err) {
                res.send(err)
            } else {
                res.sendStatus(201)
            }
        })
        }else{
            res.status(403).send({message:adminError})
        }


    },
    deleteCategory(req, res) {
        if (req.user && req.user.isAdmin) {
            Category.findOne({ _id: req.params.id }).remove((err, cate) => {
                if (err) {
                    res.send(err);
                } else {
                    res.sendStatus(200);
                }
            })
        } else {
            res.status(403).send({ message: adminError });
        }
    },
    updtateCategory(req,res){
        if(req.user && req.user.isAdmin){
            const entries = Object.keys(req.body);
            let updates = {};
            for(let i = 0;i<entries.length;i++){
                const totalCaracter = Object.values(req.body)[i].replace(/\s/g, "").length;
                if(totalCaracter>0){
                    updates[entries[i]] = Object.values(req.body)[i]
                }
            }
            if(Object.keys(updates).length != 0){
                Category.updateOne({_id:req.params.id},{$set:updates},(err,ok)=>{
                    if(err){
                        res.status(500).send({message:internalError});
                    }else{
                        res.status(200).send({message:okResponse});
                    }
                })
            }else{
                res.status(400).send({message:"Aucune mise à jour à effectuer"})
            }
        }else{
            res.status(403).send({message:adminError});
        }
    },

    //Sujets

    async createSujet(req, res) {
        if (req.user != undefined) {
            const date = Date.now();
            const today = new Date(date);
            const NewSujet = new Sujet({
                TitleSujet: req.body.TitleSujet,
                Date: today.toUTCString(),
                Author: req.user
            })
            NewSujet.save(async (err, sujet) => {
                if (err) {
                    res.send(err)
                } else {
                    const category = await Category.findById(req.params.id);
                    category.Sujet.push(NewSujet._id);
                    category.save((err, category) => {
                        if (err) {
                            res.send(err)
                        } else {
                            res.sendStatus(201)
                        }
                    })
                }
            })
        } else {
            res.send("Utilisateur inconnu")
        }
    },
    async getSujetById(req, res) {
        const sujet = await Sujet.findById(req.params.id);
        if (sujet != null) {
            sujet.populate({ path: "Post", model: Post }, (err, doc) => {
                if (err) {
                    res.status(500).send({ message: "Une erreur est survenue" })
                } else {
                    console.log(doc.Post)
                    doc.populate({ path: "Author", model: User, select: '-Password' }, (err, doc2) => {
                        if (err) {
                            res.status(500).send({ message: "Une erreur est survenue" })
                        } else {
                            res.status(200).send({ message: doc2 })
                        }
                    })
                }
            });

        } else {
            res.status(400).send({ message: "Aucune catégorie trouvée" })
        }
    },

    async deleteSujet(req, res) {
        if (req.user) {
            const sujet = await Sujet.findById(req.params.id);
            if (sujet) {
                sujet.remove((err, doc) => {
                    if (err) {
                        res.status(500).send({ message: "[removeSujet]" + internalError })
                    } else {
                        res.status(200).send({ message: okResponse })
                    }
                })

            } else {
                res.status(400).send({ message: "Aucun sujet trouvé" })
            }
        } else {
            res.status(401).send({ message: loginError });
        }

    },
    updtateSujet(req, res) {
       Sujet.findById({ _id: req.params.id }).then(result => {
            if (!result) {
                res.send('Houston, we have a problem')
            } else {
                if (result.Author.toString() != req.user._id) {
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

    //Post
    async addPost(req, res) {
        if (req.user) {
            const date = Date.now();
            const today = new Date(date);
            const newPost = new Post({
                SujetTitle: req.params.id,
                Date: today.toUTCString(),
                Author: req.user, //utilisateur connecté
                Content: req.body.Content
            })
            newPost.save(async (err, newPost) => {
                if (err) {
                    res.send(err)
                } else {
                    const sujet = await Sujet.findById(req.params.id);
                    sujet.Post.push(newPost._id);
                    sujet.save((err, doc) => {
                        if (err) {
                            res.status(500).send({ message: "Une erreur est survenue" })
                        } else {
                            res.status(201).send({ message: "Post créé" })
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
                if (result.Author.toString() != req.body.user._id) {
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

    async deletePost(req, res) {
        if (req.user) {
            const post = await Post.findById(req.params.id);
            if (req.user._id == post.Author.toString() || req.user.isAdmin) {
                const sujet = Sujet.findById(post.SujetTitle);
                if (sujet) {
                    sujet.SujetTitle.splice(sujet.SujetTitle.indexOf(req.params.id), 1);
                    post.remove((err, doc) => {
                        if (err) {
                            res.status(500).send({ message: "Une erreur est survenue lors de la supression du post" })
                        } else {
                            res.status(200).send({ message: "Post supprimé avec succès." })
                        }
                    })
                } else {
                    res.status(400).send({ message: internalError })
                }

            } else {
                res.status(403).send({ message: "Seul l'auteur du post peut le supprimer" });
            }
        } else {
            res.status(401).send({ message: "Vous devez être connecté" });
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
                post.populate({ path: "Author", model: User, select: '-Password' }, (err, doc) => {
                    if (err) {
                        res.status(500).send({ message: "Une erreur est survenue" })
                    } else {
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