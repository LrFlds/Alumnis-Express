const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const upload = require('../Config/multer');


router.route('/login').get()
                      .post(userController.checkAuthenticated)

router.route('/annuaire').get(userController.getAllUsers)

router.route('/profil/:id').get(userController.getUserByID)

router.route('/create').post(userController.createUser)

router.route('/getUser').get(userController.getUser)

router.route('/delete').delete(userController.deleteUser)

router.post('/settingUser', upload.single('image'), userController.picture)

router.route('/updateUser').post(userController.updateUser)

// router.post('/UpdateImage', upload.single('image'), userController.UpdateImage)

module.exports = router