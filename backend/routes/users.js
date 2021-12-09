const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/users');

userRoutes.post('/', userController.post);
userRoutes.get('/', userController.get);
// userRoutes.get('/', userController.getAll);
userRoutes.get('/:userId', userController.get);
userRoutes.put('/:userId', userController.put);
userRoutes.delete('/:userId', userController.delete);

module.exports = userRoutes;
