const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');





router.route('/login').get()
                    .post(userController.checkAuthenticated)

router.route('/annuaire').get(userController.getAllUsers)

router.route('/profil/:id').get(userController.checkAuthenticated,userController.getUser)

router.route('/create').post(userController.createUser)



module.exports = router