const objectId = require('objectid');

const persistentDataAccess = require('../data-access/persistent');

const messageStore = persistentDataAccess(
  `message JOIN 'User' ON Message.userId=User.id`,
);

const messageManager = {
  createMessage: async (user, messageContent, channelId) => {
    const id = objectId().toString();
    const message = {
      text: messageContent,
      id: id,
      user: user,
      channelId: channelId,
      date: new Date(),
    };
    await messageStore.create(message);
    return message;
  },
  updateMessage: async (message) => {
    return messageStore.update(message.id, message);
  },
  removeMessage: async (messageId) => {
    await messageStore.remove(messageId);
    return true;
  },
  getMessage: async (messageId) => {
    const message = await messageStore.read(messageId);
    if (!message) {
      throw new Error(`Could not find message with id ${messageId}!`);
    }
    return message;
  },
  getAllMessages: async () => {
    const messagesAll = await messageStore.all();
    console.log(`GETALLMESSAGES: ${messagesAll}`);
    if (!messagesAll) {
      throw new Error(`Could not find any messages!`);
    }
    return messagesAll;
  },
  getMessagesForChannel: async (channelId) => {
    // const ress = await messageStore.all();
    // console.log(ress);
    // return ress;

    const messagesResult = [];
    const allMessages = await messageStore.all();
    allMessages.forEach((message) => {
      if (message.channelId == channelId) {
        // console.log(`MESSAGE: ${message.message}`);
        messagesResult.push(message);
      }
    });
    // console.log(`MESSAGES: ${messagesResult}`);
    return messagesResult;
  },
};

module.exports = messageManager;
