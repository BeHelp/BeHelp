const emailManager = require('../business-logic/email');
const resetPasswordManager = require('../business-logic/reset');
require('dotenv').config({ path: './.env' });
const { User }  = require('../data-access/db');
const ResetToken = require('../models/ResetToken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const forgotPasswordController = {
    sendResetLink: async (req, res) => {
    try {
        const email = req.body.recipient;
        const user = User.findOne( {email: email});
        if(!user) {
            return res.status(400).send({error: 'User not found'})
        }

    // check if token exists and delete it
    let token = await Token.findOne({ userId: user._id });
    console.log(token);  
        if (token) { 
            await token.deleteOne()
        };

    //create token to send to the forgot password form
    let resetToken = crypto.randomBytes(32).toString('hex'); 
    const hash = await bcrypt.hash(resetToken, 10);
    await ResetToken.create({
        userId: user._id,
        token: hash,
        expiryDate: new Date(Date.now() + 86400000),
        });
        console.log('reset token saved to db');

    const link = `behelp.herokuapp.com/passwordReset?token=${resetToken}&id=${user._id}`;
    console.log(link);

    await emailManager.sendEmail(
        email, 
        'behelp.be@gmail.com', 
        'Reset your password',
        `<div style="color: blue"> Click to reset your password: ${link}. <br>
        If you didn't request to reset your password, ignore this email. </div>`
        );
        return res.status(200).send(`SUCCESS: Password reset link successfully sent!`)
    } catch (err) {
        res.status(500).send(err);
        console.error(err.message);
        }
    },
    resetPassword: async (req, res) => {
        try {
            const { password } = req.body;
            const { token } = req.params;
            const decoded = jwtToken.verifyToken(token);
            const hash = hashPassword(password);
            const updatedUser = await User.update(
                { password: hash },
                {
                where: { id: decoded.userId },
                returning: true,
                plain: true,
                }
            );
            const { id, name, email } = updatedUser[1];
            return res.status(200).send({ token, user: { id, name, email } });
            } catch (e) {
            return next(new Error(e));
        }

        emailManager.sendEmail(
            user.email,
            `behelp.be@gmail.com`,
            `Password change confirmation`,
            `<div> Your password was successfully changed </div>`
        )
    }
}
module.exports = forgotPasswordController;

// resetPassword: async (userId, token, password) => {
//     // check if reset-token exists
//     let passwordResetToken = await Token.findOne({ userId });
//         if (!passwordResetToken) {
//             throw new Error("Invalid or expired password reset token");
//         }
//     // compare the token with the existing one 
//     const isValid = await bcrypt.compare(token, passwordResetToken.token);
//         if (!isValid) {
//             throw new Error("Invalid or expired password reset token");
//         }
//     // hash new password
//     const hash = await bcrypt.hash(password, 10);
//         await User.updateOne(
//             { _id: userId },
//             { $set: { password: hash } },
//             { new: true }
//         );
//     const user = await User.findById({ _id: userId });
//         emailManager.sendEmail (
//             user.email,
//             `behelp.be@gmail.com`,
//             `Password change confirmation`,
//             `<div> Your password was successfully changed </div>`
//         );
//         // delete the reset-token
//         await passwordResetToken.deleteOne();
//         return true;
//         },