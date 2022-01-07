const  User  = require('../models/User');
const Token = require('../models/RefreshToken');
require('dotenv').config({ path: './.env' });
const bcrypt = require('bcryptjs');
// const crypto = require('crypto');
const sendEmail = require('../middleware/sendEmail');

const resetPasswordManager = {
    resetPassword: async (userId, token, password) => {
        // check if reset-token exists
        let passwordResetToken = await Token.findOne({ userId });
            if (!passwordResetToken) {
                throw new Error("Invalid or expired password reset token");
            }
        // compare the token with the existing one 
        const isValid = await bcrypt.compare(token, passwordResetToken.token);
            if (!isValid) {
                throw new Error("Invalid or expired password reset token");
            }
        // hash new password
        const hash = await bcrypt.hash(password, 10);
            await User.updateOne(
                { _id: userId },
                { $set: { password: hash } },
                { new: true }
            );
        const user = await User.findById({ _id: userId });
            sendEmail(
                user.email,
                "Password Reset Successfully",
                {
                name: user.name,
                },
                "../templates/resetPassword.handlebars"
                );
            // delete the reset-token
            await passwordResetToken.deleteOne();
            return true;
            },
        }

module.exports = resetPasswordManager;