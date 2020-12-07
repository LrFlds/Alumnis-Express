const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController'); 
const passport = require('passport');


router.route('/login').get()
                    .post(userController.checkAuthenticated, passport.authenticate('local', {
                        successRedirect:'/',
                        failureRedirect:'/login',
                    }))

router.route('/annuaire').get(userController.checkAuthenticated,userController.getAllUsers)

router.route('/profil/:id').get(userController.checkAuthenticated,userController.getUser)





module.exports = router