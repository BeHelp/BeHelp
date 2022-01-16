const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    minlength: 6,
    maxlength: 30,
    match:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    unique: false,
    select: false,
  },
  password: { type: String, required: true, minlength: 6, select: false },
  firstName: { type: String, required: true, minlength: 1, maxlength: 20 },
  lastName: { type: String, required: true, minlength: 1, maxlength: 20 },
  gender: { type: String, required: true },
  nationality: String,
  photoURL: String,
  userType: String,
  location: [{ _id: false, type: String, required: true }],
  skills: [{ _id: false, type: String }],
  languages: [{ _id: false, type: String, required: true }],
  description: { type: String, required: false, minlength: 10, maxlength: 200 },
});

module.exports = mongoose.model("User", userSchema);
