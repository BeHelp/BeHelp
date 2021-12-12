const userManager = require("../business-logic/users");
const User = require("../models/User");

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
      // let result = await User.find({ userType: "volunteer" });
      let result = await userManager.getAllVolunteers();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = userController;
