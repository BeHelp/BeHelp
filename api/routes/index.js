'use strict';
const channelRoutes = require('./channels.js');
const messageRoutes = require('./messages.js');
// const registerRoutes = require('./register.js');
// const loginRoutes = require('./login.js');

const express = require('express');

// require routes files

const router = express.Router();
router.use('/channels', channelRoutes);
router.use('/', messageRoutes);
// router.use('/register', registerRoutes);
// router.use('/login', loginRoutes);

module.exports = router;
