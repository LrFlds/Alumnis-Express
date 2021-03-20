const express = require('express');
const mailController = require('../Controllers/mailController');
const router = express.Router();
const constantes = require("../Config/variables")


router.route('/reset').post(mailController.resetPassword)
router.route('/newpassword/:id').post(mailController.newPassword)

module.exports= router