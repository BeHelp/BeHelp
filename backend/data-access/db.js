require('dotenv').config({ path: './.env' });

const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
const User = require('../models/User');

mongoose.connect(
  uri,
  () => {
    console.log('connected to mongodb');
  },
  (err) => {
    console.log(err);
  }
);

module.exports = { mongoose, User };

// async function saveUser() {
//   try {
//     const user = await User.create({
//       firstName: 'Maurice',
//       lastName: 'Doe',
//       age: 30,
//       email: 'john@doe.com',
//       password: '123456',
//     });
//     console.log(user);
//     mongoose.connection.close();
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// async function findUser() {
//   try {
//     const user = await User.find({
//       firstName: 'Maurice',
//     });
//     console.log(user);
//     mongoose.connection.close();
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// // saveUser();
// findUser();
