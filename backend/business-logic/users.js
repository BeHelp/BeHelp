const { User, mongoose } = require("../data-access/db.js");

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
        userData.location !== "" &&
        userData.location !== undefined &&
        userData.location !== null &&
        userData.location !== []
      ) {
        searchQuery.location = userData.location;
      }
      if (
        userData.languages !== "" &&
        userData.languages !== undefined &&
        userData.languages !== null &&
        userData.languages !== []
      ) {
        searchQuery.languages = userData.languages;
      }
      if (
        userData.skills !== "" &&
        userData.skills !== undefined &&
        userData.skills !== null &&
        userData.skills !== []
      ) {
        searchQuery.skills = userData.skills;
      }
      if (
        userData.firstName !== "" &&
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
  putUser: async (userId, userData) => {
    const updatedUser= await User.findByIdAndUpdate(userId, {
      // firstName: 'Senait'
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
      dob: userData.dob,
      gender: userData.gender,
      nationality: userData.nationality,
      photo: userData.photo,
      newcomer: userData.newcomer,
      volunteer: userData.volunteer,
      location: userData.location,
      skills: userData.skills,
      languages: userData.languages,
      description: userData.description,
    });
    return updatedUser;
  },
  deleteUser: async (userId) => {
    await mongoose.remove(userId);
    return true;
  },
};

module.exports = userManager;
