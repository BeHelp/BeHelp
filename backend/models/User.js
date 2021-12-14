const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: false,
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
    lowercase: false,
    minlength: 6,
    maxlength: 30,
    match: /.+\@.+\..+/,
    unique: false,
  },
  password: { type: String, required: true, minlength: 6 },
  firstName: { type: String, required: true, minlength: 2, maxlength: 20 },
  lastName: { type: String, required: true, minlength: 2, maxlength: 20 },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  nationality: String,
  photoURL: String,
  userType: String,
  location: [String],
  skills: [String],
  languages: [String],
  description: { type: String, required: false, minlength: 10, maxlength: 200 },
});

module.exports = mongoose.model('User', userSchema);
