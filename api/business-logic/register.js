const bcrypt = require('bcryptjs');

const persistentDataAccess = require('../data-access/persistent');

const registerStore = persistentDataAccess('User');

const registerManager = {
  register: async (user, pass) => {
    const newUser = {
      user,
      pass,
    };
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.pass, salt, async (err, hash) => {
        if (err) {
          console.log(err);
        }
        newUser.pass = hash;
        await registerStore.create(newUser);
      });
    });
    return newUser;
  },
};

module.exports = registerManager;
