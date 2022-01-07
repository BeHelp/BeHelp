const  User  = require('../models/User');
const Token = require('../models/RefreshToken');
require('dotenv').config({ path: './.env' });
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
// const jwt = require('jsonwebtoken');
const sendEmail = require('../middleware/sendEmail');

const forgotPasswordManager = {
    forgotPassword: async (email) => { 
    //check if the email address sent by client exists in the db
    const user = await User.findOne({
        where: {email: email}, 
        })
        if (!user) {
            throw new Error("User does not exist");
        }
            // check if token exists 
            let token = await Token.findOne({ userId: user._id });
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

                // send email with the token 
                const link = `/passwordReset?token=${resetToken}&id=${user._id}`;
                    sendEmail(user.email, "Password Reset Request",{name: user.name, link: link,},'../templates/requestResetPassword.handlebars');
                    return link;
            },
        }
        
module.exports = forgotPasswordManager;
