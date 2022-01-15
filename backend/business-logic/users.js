const { User } = require("../data-access/db.js");
const RefreshToken = require("../models/RefreshToken.js");

const userManager = {
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
      console.log(searchQuery.languages);
      const user = await User.find({
        $and: [
          { languages: { $all: searchQuery.languages } },
          { skills: { $all: searchQuery.skills } },
          { location: { $all: searchQuery.location } },
          { userType: "volunteer" },
        ],
      });
      console.log(user);
      return user;
    } catch (err) {
      console.log(err.message);
    }
  },
  getAllVolunteers: async () => {
    try {
      const volunteers = await User.find({ userType: "volunteer" });
      return volunteers;
    } catch (err) {
      console.log(err.message);
    }
  },
  putUser: async (userId, userData) => {
    try {
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
    } catch (err) {
      console.log(err.message);
    }
  },
  getUserById: async (userId) => {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (err) {
      console.log(err.message);
    }
  },
  getUserEmailById: async (userId) => {
    try {
      const user = await User.findById(userId).select("+email");
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
  logoutUser: async (userId) => {
    try {
      const response = await RefreshToken.find({ user: userId }).deleteMany();
      console.log(response);
      if (response.deletedCount === 0) {
        console.log("user not found");
        return false;
      }
      console.log("user refreshtoken deleted");
    } catch (err) {
      console.log(err.message);
    }
  },
};

module.exports = userManager;
