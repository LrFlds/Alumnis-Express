const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const upload = require('../Config/multer');


router.route('/login').get()
                      .post(userController.checkAuthenticated)

<<<<<<< HEAD
// router.route('/annuaire').get(userController.checkUser,userController.getAllUsers)
=======
>>>>>>> a962b1cd562cb63cb22230313eba192c81a5d401
router.route('/annuaire').get(userController.getAllUsers)

// router.route('/profil/:id').get(userController.checkUser,userController.getUserByID)
router.route('/profil/:id').get(userController.getUserByID)

// router.route('/create').post(userController.checkUser,userController.createUser)
router.route('/create').post(userController.createUser)

router.route('/getUser').get(userController.getUser)

router.route('/delete').delete(userController.deleteUser)

router.post('/settingUser', upload.single('image'), userController.picture)

router.route('/updateUser').post(userController.updateUser)

// router.route('/connectedUser').get(userController.connectedUser)

// router.post('/UpdateImage', upload.single('image'), userController.UpdateImage)



module.exports = router