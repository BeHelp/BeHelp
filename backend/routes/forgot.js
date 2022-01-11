const express = require('express');
const forgotRoutes = express.Router();
const forgotPasswordController = require('../controllers/forgot');

forgotRoutes.use((req, res, next) => {
    console.log('api! forgot password');
    next();
});

forgotRoutes.post('', forgotPasswordController.sendResetLink);
forgotRoutes.post('/reset-password/:token', forgotPasswordController.resetPassword),

module.exports = forgotRoutes;
