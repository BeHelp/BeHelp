const express = require('express');
const resetRoutes = express.Router();
const resetController = require('../controllers/reset');

loginRoutes.use((req, res, next) => {
    console.log('api! reset password');
    next();
});

resetRoutes.post('/', resetController.reset);

module.exports = resetRoutes;