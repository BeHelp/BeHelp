// require('dotenv').config({ path: './.env' });
const forgotManager  = require('../business-logic/forgot');
const Token = require('../data-access/db');
const ResetToken = require('../data-access/db');

const forgotPasswordController = {
    sendResetLink: async (req, res) => {
        try {
            const email = req.body.recipient;
            const result = await forgotManager.sendResetLink(email);
            res.status(200).json({"message": "Reset link sent!"});
        } catch (error) {
            console.error(error);
            res.status(500).send(error.message);
        }
    },
    resetPassword: async (req, res) => {
        try {
            await forgotManager.resetPassword (
                req.body._id,
                req.body.token,
                req.body.password,
                req.body.confirmPassword
            );
            return res.json({"message": "password reset successful!"});
        } catch (error) {
            console.error(error);
            res.status(500).send(error.message);
        }
    },
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