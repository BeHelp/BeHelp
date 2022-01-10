const express = require('express');
const forgotRoutes = express.Router();
const emailController = require('../controllers/email');
// const { forgotPasswordManager } = require('../business-logic/forgot');

forgotRoutes.use((req, res, next) => {
    console.log('api! forgot password');
    next();
});

forgotRoutes.post('/:resetToken', emailController.sendResetLink);

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