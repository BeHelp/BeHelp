const userManager = require("../business-logic/users");
const registerManager = require("../business-logic/register");

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
      console.log(userData);
      const userFromDB = await registerManager.getUserByEmail(userData.email);
      if (
        !userData.firstName ||
        !userData.lastName ||
        !userData.email ||
        !userData.gender
      ) {
        console.log("Please fill in all fields");
        res.status(400).send({ message: "Please fill in all fields" });
      } else if (userFromDB && userData.email != userData.oldEmail) {
        console.log("email already exists");
        res.status(400).send({ message: "email already exists" });
      } else if (userData.password && userData.password.length < 6) {
        return res
          .status(400)
          .send({ message: "Password should be at least 6 characters!" });
      } else if (userData.description.length < 10) {
        return res
          .status(400)
          .send({ message: "Description should be at least 6 characters!" });
      } else {
        const result = await userManager.putUser(userId, userData);
        res.status(201).send(result);
      }
    } catch (error) {
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
  logout: async (req, res) => {
    try {
      const userId = req.params.userId;
      if (userId === undefined || userId === null) {
        res.status(404).send({ error: "userId empty" });
      } else {
        await userManager.logoutUser(userId);
        res.status(200).send(
          JSON.stringify({
            user: `user logged out successfully!`,
          })
        );
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = userController;
