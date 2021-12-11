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
  password: { type: String, required: false, minlength: 6 },
  firstName: { type: String, required: false, minlength: 2, maxlength: 20 },
  lastName: { type: String, required: false, minlength: 2, maxlength: 20 },
  dob: { type: Date, required: false },
  gender: { type: String, required: false },
  nationality: { type: String, required: false },
  photo: String,
  newcomer: Boolean,
  volunteer: Boolean,
  location: [{ postcode: Number }, { province: String }],
  skills: [String],
  languages: [String],
  description: { type: String, required: false, minlength: 10, maxlength: 200 },
});

module.exports = mongoose.model('User', userSchema);
