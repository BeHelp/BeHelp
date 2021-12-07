const express = require('express');
const registerController = require('../controllers/register');

const registerRoutes = express.Router();

registerRoutes.use((req, res, next) => {
  console.log('api! register route');
  next();
});

registerRoutes.post('/', registerController.post);

module.exports = registerRoutes;
