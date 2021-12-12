const userManager = require("../business-logic/users");

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
      console.log(userData);
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
      const newData = req.body;
      const users = await userManager.getAllusers();
      const savedUseruser = users.find((user) => user["user"] === req.user);
      if (savedUseruser === undefined || newData.id !== userId) {
        throw Error("Cannot change user!");
      }
      await userManager.updateuser(newData);
      res.status(200).send(JSON.stringify(newData));
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await userManager.getUserById(userId);
      if (user === undefined || user === null) {
        res.status(404).send({ error: "User not found" });
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
