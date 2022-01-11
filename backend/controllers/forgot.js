const emailManager = require('../business-logic/email');
const { User }  = require('../data-access/db');
const Token = require('../models/RefreshToken');
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
    await new Token({
        userId: user._id,
        token: hash,
        createdAt: Date.now(),
        }).save();

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
    }
}
module.exports = forgotPasswordController;
