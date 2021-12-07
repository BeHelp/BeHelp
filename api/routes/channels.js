const express = require('express');
const channelController = require('../controllers/channels');

const channelRoutes = express.Router();

channelRoutes.get('/', channelController.get);
channelRoutes.get('/:channelId', channelController.getChannelById);
channelRoutes.delete('/:channelId', channelController.delete);
channelRoutes.put('/:channelId', channelController.put);
channelRoutes.post('/', channelController.post);

module.exports = channelRoutes;
