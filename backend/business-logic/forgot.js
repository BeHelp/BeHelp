const sendEmail = require('../middleware/email');
const baseURL = process.env.BASE_URL;
const { User }  = require('../data-access/db');
const ResetToken = require('../models/ResetToken');
const crypto = require('crypto');
const hashing = require('../middleware/hashing');

const forgotManager = {
    sendResetLink: async (email) => {
            const user = await User.findOne({email: email});
            console.log(user);
            if(!user) {
                throw new Error('User not found'); 
            }
            
            //create reset token and hash it
            let resetToken = crypto.randomBytes(32).toString('hex'); 

            await ResetToken.create({
                userId: user._id,
                token: resetToken,
                expiryDate: new Date(Date.now() + 86400000),
                });
            console.log('reset token saved to db');

            const link = `${baseURL}/forgot-password/reset/${user._id}/${resetToken}`;
            console.log(link);

            await sendEmail (
                email, 
                'behelp.be@gmail.com', 
                'Reset your password',
                `<div style="color: blue"> Click to reset your password: ${link}. <br>
                <br>
                If you didn't request to reset your password, ignore this email. </div>`
                );
    },

    resetPassword: async(userId, token, newPassword, confirmPassword) => {
            const isEqual = (newPassword === confirmPassword);
            console.log(newPassword);
            console.log(confirmPassword);
            if(isEqual == false) {
                throw new Error("Password does not match");
            }
            console.log(token);
            // find the reset token and compare it to the existing one
            let passwordResetToken = await ResetToken.findOne({ token });
            if(!passwordResetToken) {
                throw new Error("Invalid or expired password reset token");
            }

            console.log(passwordResetToken)

            // check if the user who followed the link and the user who requested password change are the same
            const isValid = userId === passwordResetToken.userId;
            if(isValid == false) {
                throw new Error("Invalid user");
            }

            const hash = await hashing(newPassword);
            await User.updateOne (
                { _id: userId },
                { $set: { password: hash } },
                { new: true }
            );
    }
}
module.exports = forgotManager;
