const express = require('express');
const emailRoutes = express.Router();
const emailController = require('../controllers/email');

emailRoutes.use((req, res, next) => {
  next();
});

emailRoutes.post('/', emailController.send);

module.exports = emailRoutes;
