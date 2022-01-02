const express = require('express');
const registerRoutes = express.Router();
const registerController = require('../controllers/register.js');

registerRoutes.use((req, res, next) => {
  console.log('api! register route');
  next();
});

registerRoutes.post('/', registerController.post);
registerRoutes.get('/:userId', registerController.getById);

module.exports = registerRoutes;