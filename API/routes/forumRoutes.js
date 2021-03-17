const express = require('express');
const router = express.Router();
const forumController = require('../Controllers/forumController');
const userController = require('../Controllers/userController');

router.route('/').get(userController.checkUser,forumController.getAllCategories)
                 .post(userController.checkUser,forumController.createCategory);

router.route('/:id').get(userController.checkUser,forumController.getCategoryById)
                    .delete(userController.checkUser,forumController.deleteCategory)

router.route('/sujet/:id').get(userController.checkUser,forumController.getSujetById)
                          .post(userController.checkUser,forumController.createSujet)
                          .delete(userController.checkUser,forumController.deleteSujet);

router.route('/sujet/byCategory/:id').get(userController.checkUser,forumController.getAllSujetByCategory);

module.exports = router;