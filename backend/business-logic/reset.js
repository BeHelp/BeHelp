const  User  = require('../data-access/db');
const Token = require('../data-access/db');
require('dotenv').config({ path: './.env' });
const bcrypt = require('bcryptjs');
// const crypto = require('crypto');
const emailManager = require('../business-logic/email');

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
            emailManager.sendEmail (
                user.email,
                `behelp.be@gmail.com`,
                `Password change confirmation`,
                `<div> Your password was successfully changed </div>`
            );
            // delete the reset-token
            await passwordResetToken.deleteOne();
            return true;
            },
        }

module.exports = resetPasswordManager;