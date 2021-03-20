const express = require('express');
const router = express.Router();
const forumController = require('../Controllers/forumController');
const userController = require('../Controllers/userController');

router.route('/').get(userController.checkUser,forumController.getAllCategories)
                 .post(userController.checkUser,forumController.createCategory);

router.route('/category/:id').get(userController.checkUser,forumController.getCategoryById)
                             .delete(userController.checkUser,forumController.deleteCategory)
                             .patch(userController.checkUser,forumController.updtateCategory);

router.route('/sujet/:id').get(userController.checkUser,forumController.getSujetById)
                          .post(userController.checkUser,forumController.createSujet)
                          .delete(userController.checkUser,forumController.deleteSujet)
                          .patch(userController.checkUser,forumController.updtateSujet);

router.route('/post').get(userController.checkUser,forumController.getAllPost);


router.route('/postById/:id').get(userController.checkUser,forumController.getPostById)
                    .post(userController.checkUser,forumController.addPost)
                    .delete(userController.checkUser,forumController.deletePost)
                    .patch(userController.checkUser,forumController.updtatePost);

module.exports = router;