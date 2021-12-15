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
