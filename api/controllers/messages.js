const messageManager = require('../business-logic/messages');

const messageController = {
  get: async (req, res) => {
    // returns all messages currently in the system
    try {
      const messages = await messageManager.getAllMessages();
      console.log(messages);
      res.status(200).send(JSON.stringify(messages));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getMessagesForChannel: async (req, res) => {
    // returns the messages that belong in the channel with the specified id
    // passed as /api/channels/:channelId/messages
    try {
      const channelId = req.params.channelId;
      // console.log(channelId);
      const messages = await messageManager.getMessagesForChannel(channelId);
      // console.log(`normal: ${messages}`);
      // console.log(`stringified: ${JSON.stringify(messages)}`);
      res.status(200).send(JSON.stringify(messages));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  put: async (req, res) => {
    // updates the messages with the specified id
    // passed as /api/messages/:messageId
    try {
      const messageId = req.params.messageId;
      const newData = req.body;
      const messages = await messageManager.getAllMessages();
      const savedUserMessage = messages.find(
        (message) => message['user'] === req.user,
      );
      // console.log(`saveduser: ${savedUserMessage}, sessionuser: ${req.user}`);
      if (savedUserMessage === undefined || newData.id !== messageId) {
        throw Error('Cannot change message!');
      }
      await messageManager.updateMessage(newData);
      res.status(200).send(JSON.stringify(newData));
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  post: async (req, res) => {
    // creates a new message based on the passed body
    try {
      const user = req.user;
      const content = req.body.text;
      const channelId = req.params.channelId;
      const message = await messageManager.createMessage(
        user,
        content,
        channelId,
      );
      res.status(200).send(JSON.stringify(message));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  delete: async (req, res) => {
    // deleted the message with the specified id
    // passed as /api/messages/:messageId
    try {
      const messageId = req.params.messageId;
      const messages = await messageManager.getAllMessages();
      const savedUserMessage = messages.find(
        (message) => message['user'] === req.user,
      );
      // console.log(`saveduser: ${savedUserMessage}, sessionuser: ${req.user}`);
      if (savedUserMessage === undefined) {
        throw Error('Cannot delete message!');
      }
      await messageManager.removeMessage(messageId);
      res.status(200).send(
        JSON.stringify({
          message: `Message ${messageId} was successfully deleted!`,
        }),
      );
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = messageController;
