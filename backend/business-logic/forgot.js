const sendEmail = require('../middleware/email');
const { User }  = require('../data-access/db');
// const Token = require('../data-access/db');
const ResetToken = require('../data-access/db');
const bcrypt = require('bcryptjs');
const hashing = require('../middleware/hashing');
const crypto = require('crypto');
// const jwt = require('jsonwebtoken');

const forgotManager = {
    sendResetLink: async (email) => {
        try {
            const user = User.findOne({email: email});
            if(!user) {
                return res.status(400).send({error: 'User not found'}) 
            }

            //create reset token and hash it
            let resetToken = crypto.randomBytes(32).toString('hex'); 
            const hash = hashing(resetToken); // using hash middleware

            await ResetToken.create({
                userId: user._id,
                token: hash,
                expiryDate: new Date(Date.now() + 86400000),
                });
            console.log('reset token saved to db');

            const link = `/passwordReset?token=${resetToken}&id=${user._id}`;
            console.log(link);
            
            // check if token exists and delete it
            // let token = await Token.findOne({ userId: user._id });
            // console.log(token);  
            // if (token) { 
            //     await token.deleteOne()
            //     };

            await sendEmail (
                email, 
                'behelp.be@gmail.com', 
                'Reset your password',
                `<div style="color: blue"> Click to reset your password: ${link}. <br>
                If you didn't request to reset your password, ignore this email. </div>`
                );
            return res.status(200).send(`SUCCESS: Password reset link successfully sent!`)
        } catch (error) {
            res.status(500).send(err);
            console.error(err.message);
        }
    },
    resetPassword: async(userId, token, newPassword) => {
        try {
            // find the reset token and compare it to the existing one
            let passwordResetToken = await ResetToken.findOne({ userId });
            if(!passwordResetToken) {
                res.status(400).send("Invalid or expired password reset token");
            }

            const isValid = await bcrypt.compare(token, passwordResetToken);
            if(!isValid) {
                res.status(400).send("Invalid or expired password reset token");
            }

            const hash = hashing(newPassword);
            await User.updateOne (
                { _id: userId },
                { $set: { password: hash } },
                { new: true }
            );

            const user = await User.findOne({ _id: userId });
            if(!user) {
                res.status(400).send('User does not exist');
            }
            await sendEmail (
                user.email, 
                'behelp.be@gmail.com', 
                'Reset your password',
                `<div style="color: blue"> Click to reset your password: ${link}. <br>
                If you didn't request to reset your password, ignore this email. </div>`
                );
                return res.status(200).send(`SUCCESS: Password successfully updated!`)
            } catch (err) {
            res.status(500).send(err);
            console.error(err.message);
        }
    }
}

module.exports = forgotManager;
