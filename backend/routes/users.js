const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/users');
const { authCheck } = require('../middleware/auth');

// userRoutes.post('/', userController.post);
userRoutes.post('/', userController.get);
userRoutes.get('/volunteers', userController.getAll);
userRoutes.get('/:userId', userController.getById);
userRoutes.delete('/:userId', userController.delete);

// auth route for getting user email
userRoutes.post('/contactinfo/:userId', authCheck, userController.getEmailById);

module.exports = userRoutes;
