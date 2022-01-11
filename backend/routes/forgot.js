const express = require('express');
const forgotRoutes = express.Router();
const forgotPasswordController = require('../controllers/forgot');

forgotRoutes.use((req, res, next) => {
    console.log('api! forgot password');
    next();
});

forgotRoutes.post('', forgotPasswordController.sendResetLink);
forgotRoutes.post('/:token', forgotPasswordController.resetPassword),

module.exports = forgotRoutes;

// const express = require('express');
// const emailRoutes = express.Router();
// const emailController = require('../controllers/email');

// emailRoutes.use((req, res, next) => {
//   next();
// });

// emailRoutes.post('/', emailController.send);
// emailRoutes.post('', emailController.sendResetLink);

// module.exports = emailRoutes;