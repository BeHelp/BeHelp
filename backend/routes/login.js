const express = require('express');
const loginRoutes = express.Router();
// const loginController = require('../controllers/login');

loginRoutes.use((req, res, next) => {
  console.log('api! login route');
  next();
});

// loginRoutes.post('/', loginController.post);

module.exports = loginRoutes;
