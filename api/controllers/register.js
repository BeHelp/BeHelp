const registerManager = require('../business-logic/register');

const persistentDataAccess = require('../data-access/persistent');

const registerStore = persistentDataAccess('users');

const registerController = {
  post: async (req, res) => {
    try {
      const user = req.body.user;
      const pass = req.body.pass;
      const allUsers = await registerStore.all();
      const userexist = await allUsers.find((u) => u.user === user);
      if (userexist === undefined) {
        // console.log('proceeding with save');
        const newUser = await registerManager.register(user, pass);
        console.log('saved user: ' + newUser.user);
        res.status(200).send({ message: `saved user: ${newUser.user}` });
      } else {
        res.status(400).send({ message: 'user already exists' });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = registerController;
