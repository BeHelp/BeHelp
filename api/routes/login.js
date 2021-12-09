const express = require('express');
const loginController = require('../controllers/login');

const loginRoutes = express.Router();

loginRoutes.use((req, res, next) => {
  console.log('api! login route');
  // res.writeHead(401, { 'WWW-Authenticate': 'Basic' });
  // res.end();
  next();
});

loginRoutes.post('/', loginController.post);

module.exports = loginRoutes;
