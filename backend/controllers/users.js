const userManager = require('../business-logic/users');

module.exports = userController = {
  post: async (req, res) => {
    try {
      const userData = req.body;
      const user = await userManager.getUserByEmail(userData.email);
      if(!userData.firstName || !userData.lastName || 
        !userData.email || !userData.password || !userData.dob || !userData.gender ){
        res.status(400).send({ message: 'Please fill in all fields ' });
        }
      else if(user){
        res.status(400).send({ message: 'email already exists' });
      }
      else if(userData.password.length < 6){
        res.status(400).send({ message: 'Password should be at least 6 characters' });
      }
      else {
        const newUser = await userManager.postUser(userData);
        res.status(201).send({message: `saved user: ${newUser.firstName} ${newUser.lastName}`});
      }
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
