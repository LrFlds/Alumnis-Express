const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const upload = require('../Config/multer');


router.route('/login').get()
                      .post(userController.checkAuthenticated)

router.route('/annuaire').get(userController.checkUser,userController.getAllUsers)

router.route('/profil/:id').get(userController.checkUser,userController.getUserByID)


router.route('/create').post(userController.checkUser,userController.createUser)


router.route('/getUser').get(userController.checkUser,userController.getUser)
router.route('/delete').delete(userController.checkUser,userController.deleteUser)

router.post('/settingUser', upload.single('image'), userController.picture)

router.route('/updateUser').post(userController.updateUser)

router.route('/connectedUser').get(userController.connectedUser)

router.route('/logout').get(userController.logout)




module.exports = router