const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');





router.route('/login').get()
                    .post(userController.checkAuthenticated, userController.Cookie)

router.route('/annuaire').get(userController.validateCookie,userController.getAllUsers)

router.route('/profil').get(userController.checkAuthenticated,userController.getUser)

router.route('/create').post(userController.createUser)

router.route('/getUser').get(userController.getUser)

router.route('/testcookie').get(userController.validateCookie,userController.Cookie)



module.exports = router