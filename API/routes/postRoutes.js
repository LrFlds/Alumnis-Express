const express = require('express');
const router = express.Router();
const postController = require('../Controllers/postController');
const userController = require('../Controllers/userController');

router.route('/').get(userController.checkUser,postController.getAllPost)


router.route('/:id').get(userController.checkUser,postController.getPostById)
                    .post(userController.checkUser,postController.addPost)
                    .delete(userController.checkUser,postController.deletePost)
                    .patch(userController.checkUser,postController.updtatePost);


module.exports = router;