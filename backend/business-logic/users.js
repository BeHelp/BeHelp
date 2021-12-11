const { User, mongoose } = require('../data-access/db.js');

const userManager = {
  postUser: async (userData) => {
    try {
      const user = await User.create({
        firstName: userData.firstName,
        lastName: userData.lastName,
        age: userData.age,
        email: userData.email,
        password: userData.password,
      });
      console.log(user);
      return user;
      // mongoose.connection.close();
    } catch (err) {
      console.log(err.message);
    }
  },
  getUser: async (userData) => {
    try {
      const searchQuery = {};

      if (
        userData.location !== '' &&
        userData.location !== undefined &&
        userData.location !== null &&
        userData.location !== []
      ) {
        searchQuery.location = userData.location;
      }
      if (
        userData.languages !== '' &&
        userData.languages !== undefined &&
        userData.languages !== null &&
        userData.languages !== []
      ) {
        searchQuery.languages = userData.languages;
      }
      if (
        userData.skills !== '' &&
        userData.skills !== undefined &&
        userData.skills !== null &&
        userData.skills !== []
      ) {
        searchQuery.skills = userData.skills;
      }
      if (
        userData.firstName !== '' &&
        userData.firstName !== undefined &&
        userData.firstName !== null
      ) {
        searchQuery.firstName = userData.firstName;
      }

      const user = await User.find(searchQuery);

      console.log(user);
      return user;
      // mongoose.connection.close();
    } catch (err) {
      console.log(err.message);
    }

    if (!user) {
      throw new Error(`Could not find such a user!`);
    }
  },
  getAllUsers: async () => {
    const usersAll = await mongoose.all();
    console.log(`GETALLuserS: ${usersAll}`);
    if (!usersAll) {
      throw new Error(`Could not find any users!`);
    }
    return usersAll;
  },
  putUser: async (user) => {
    return mongoose.update(user.id, user);
  },
  deleteUser: async (userId) => {
    await mongoose.remove(userId);
    return true;
  },
};

module.exports = userManager;
