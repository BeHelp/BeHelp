// require('dotenv').config({ path: './.env' });
const forgotManager  = require('../business-logic/forgot');
const Token = require('../data-access/db');
const ResetToken = require('../data-access/db');

const forgotPasswordController = {
    sendResetLink: async (req, res) => {
        try {
            const email = req.body;
            const result = forgotManager.sendResetLink(email);
            res.status(200).send(`Reset link sent!`)
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    resetPassword: async (req, res) => {
        try {
            
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
}
    // check if token exists and delete it
        // let token = await Token.findOne({ userId: user._id });
        // console.log(token);  
        // if (token) { 
        //     await token.deleteOne()
        //     };

    resetPassword: async (req, res) => {
        try {
            const { password } = req.body;
            const { token } = req.params;
            // verify the token
            // const decoded = jwtToken.verifyToken(token);
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
            await emailManager.sendEmail(
                user.email,
                `behelp.be@gmail.com`,
                `Password change confirmation`,
                `<div> Your password was successfully changed </div>`
            )
            return res.status(200).send({ token, user: { id, name, email } });
            } catch (err) {
            return next(new Error(err));
        }

        
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