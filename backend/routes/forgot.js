const express = require('express');
const forgotRoutes = express.Router();
const forgotController = require('../controllers/forgot');
// const { forgotPasswordManager } = require('../business-logic/forgot');

forgotRoutes.use((req, res, next) => {
    console.log('api! forgot password');
    next();
});

forgotRoutes.post('/:resetToken', forgotController.forgot);

module.exports = forgotRoutes;