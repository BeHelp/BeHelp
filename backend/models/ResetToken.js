const mongoose = require('mongoose');
const User = require('../models/User');

const ResetTokenSchema = new mongoose.Schema({
    token: String,
    userId: String,
    expiryDate: Date,
});

ResetTokenSchema.statics.verifyExpiration = (token) => {
    return token.expiryDate.getTime() < new Date().getTime();
};

module.exports = mongoose.model('ResetToken', ResetTokenSchema);
