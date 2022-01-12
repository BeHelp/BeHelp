const { User, mongoose } = require('../data-access/db.js');
const hashing = require('../middleware/hashing');

const registerManager = {
    postUser: async (userData) => {
        try {
            const newUser = await User.create({
                email: userData.email,
                password: await hashing(userData.password),
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
            console.log(newUser);
            return newUser;
        } catch (err) {
            console.log(err.message);
        }
    },
    getUserByEmail: async (email) => {
        try {
            const user = await User.findOne({ email: email });
            return user;
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
}

module.exports = registerManager;
