const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController'); 
const passport = require('passport');


router.route('/login').get()
                    .post(userController.checkAuthenticated, userController.test)

router.route('/annuaire').get(userController.checkAuthenticated,userController.getAllUsers)

router.route('/profil/:id').get(userController.checkAuthenticated,userController.getUser)

router.route('/create').post(userController.createUser)



module.exports = router