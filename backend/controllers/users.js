const userManager = require('../business-logic/users');

const userController = {
  get: async (req, res) => {
    try {
      const userData = req.body;
      const result = await userManager.getUser(userData);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getById: async (req, res) => {
    try {
      const userId = req.params.userId;
      const result = await userManager.getUserById(userId);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getEmailById: async (req, res) => {
    try {
      const userId = req.params.userId;
      const result = await userManager.getUserEmailById(userId);
      res.status(200).send(result.email);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await userManager.getAllVolunteers();
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
      const user = await userManager.getUserById(userId);
      if (user === undefined || user === null) {
        res.status(404).send({ error: 'User not found' });
      } else {
        await userManager.deleteUser(user);
        res.status(200).send(
          JSON.stringify({
            user: `user ${userId} was successfully deleted!`,
          })
        );
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = userController;
