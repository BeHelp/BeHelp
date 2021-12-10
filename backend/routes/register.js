const express = require('express');
const registerRoutes = express.Router();
// const registerController = require('../controllers/register');

registerRoutes.use((req, res, next) => {
  console.log('api! register route');
  next();
});

// registerRoutes.post('/', registerController.post);

module.exports = registerRoutes;
