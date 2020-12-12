const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const multer = require('../Config/multer')





router.route('/login').get()
                      .post(userController.checkAuthenticated)

router.route('/annuaire').get(userController.getAllUsers)

router.route('/profil/:id').get(userController.getUserByID)

router.route('/create').post(userController.createUser)

router.route('/getUser').get(userController.getUser)

router.route('/settingUser').post(multer, userController.picture)



module.exports = router