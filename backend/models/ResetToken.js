const mongoose = require('mongoose');
const User = require('../models/User');

const ResetTokenSchema = new mongoose.Schema({
    token: String,
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    },
    expiryDate: Date,
});

ResetTokenSchema.statics.verifyExpiration = (token) => {
    return token.expiryDate.getTime() < new Date().getTime();
};

module.exports = mongoose.model('ResetToken', ResetTokenSchema);
