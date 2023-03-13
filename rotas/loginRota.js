const express = require('express');
const loginController = require('./../controller/loginController');

const router = express.Router();

router
    .route('/login')
    .post(loginController.validar);

module.exports = router;