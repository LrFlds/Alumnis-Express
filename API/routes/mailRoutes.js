const express = require('express');
const mailController = require('../Controllers/mailController');
const router = express.Router();



router.route('/reset').post(mailController.resetPassword)
router.route('/newpassword/:id').post(mailController.newPassword)

module.exports= router