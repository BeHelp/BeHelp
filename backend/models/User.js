const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: true,
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    minlength: 6,
    maxlength: 30,
    match: /.+\@.+\..+/,
    unique: true,
  },
  password: { type: String, required: true, minlength: 6 },
  firstName: { type: String, required: true, minlength: 2, maxlength: 20 },
  lastName: { type: String, required: true, minlength: 2, maxlength: 20 },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  nationality: [String],
  photo: String,
  newcomer: Boolean,
  volunteer: Boolean,
  location: [{ postcode: Number }, { province: String }],
  skills: [String],
  languages: [String],
  description: { type: String, required: true, minlength: 10, maxlength: 200 },
});

module.exports = mongoose.model('User', userSchema);
