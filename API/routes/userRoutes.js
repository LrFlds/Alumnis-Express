const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController'); 


router.route('/login').get()
                    .post(userController.login)

router.route('/annuaire').get(userController.getAllUsers)

router.route('/profil/:id').get(userController.getUser)





module.exports = router