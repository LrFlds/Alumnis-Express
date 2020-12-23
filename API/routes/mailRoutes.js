const express = require('express');
const mailController = require('../Controllers/mailController');
const router = express.Router();
const mailController = require('../Controllers/mailController');

router.route('/sendMail').post(mailController.mailAutoInscription)