const { User, mongoose } = require("../data-access/db.js");

const userManager = {
  postUser: async (userData) => {
    try {
      const user = await User.create({
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
        dob: userData.dob,
        gender: userData.gender,
        nationality: userData.nationality,
        photoURL: userData.photoURL,
        userType: userData.userType,
        location: userData.location,
        skills: userData.skills,
        languages: userData.languages,
        description: userData.description,
      });
      console.log(user);
      return user;
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
    } catch (err) {
      console.log(err.message);
    }

    if (!user) {
      throw new Error(`Could not find such a user!`);
    }
  },
  getAllVolunteers: async () => {
    try {
      const volunteers = await User.find({ userType: "volunteer" });
      return volunteers;
    } catch (err) {
      console.log(err.message);
    }
    return usersAll;
  },
  putUser: async (userId, userData) => {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
      dob: userData.dob,
      gender: userData.gender,
      nationality: userData.nationality,
      photoURL: userData.photoURL,
      userType: userData.userType,
      location: userData.location,
      skills: userData.skills,
      languages: userData.languages,
      description: userData.description,
    });
    return updatedUser;
  },
  getUserById: async (userId) => {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (err) {
      console.log(err.message);
    }
  },
  deleteUser: async (user) => {
    try {
      await user.remove();
      return true;
    } catch (err) {
      console.log(err.message);
    }
  },
};

module.exports = userManager;
