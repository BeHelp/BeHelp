const userManager = require('../business-logic/users');
const User = require('../models/User');

module.exports = userController = {
  post: async (req, res) => {
    try {
      const userData = req.body;
      console.log(userData);
      const result = await userManager.postUser(userData);
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  get: async (req, res) => {
    try {
      const userData = req.body;
      const result = await userManager.getUser(userData);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await userManager.getAllusers();
      console.log(users);
      res.status(200).send(JSON.stringify(users));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  put: async (req, res) => {
    try {
      const userId = req.params.userId;
      const userData = req.body;
      const result = await userManager.putUser(userId, userData);
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const userId = req.params.userId;
      const users = await userManager.getAllusers();
      const savedUseruser = users.find((user) => user['user'] === req.user);
      if (savedUseruser === undefined) {
        throw Error('Cannot delete user!');
      }
      await userManager.removeuser(userId);
      res.status(200).send(
        JSON.stringify({
          user: `user ${userId} was successfully deleted!`,
        })
      );
      // let result = await User.find({ userType: "volunteer" });
      let result = await userManager.getAllVolunteers();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = userController;
