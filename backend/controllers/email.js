const emailManager = require('../business-logic/email');
const { User }  = require('../data-access/db.js');
const Token = require('../models/RefreshToken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const emailController = {
  send: async (req, res) => {
    try {
      await emailManager.sendEmail(
        req.body.email,
        'behelp.be@gmail.com',
        'New Message from BeHelp',
        `<div style="color: blue">${req.body.message}</div>`
        );
        return res.status(200).send(`SUCCESS: Email successfully sent!`)
    } catch (error) {
      res.status(500).send(error);
    }
  },

  sendResetLink: async (req, res, next) => {
    try {
      const email = req.body.email;
      const user = User.findOne( {email: email});
      if(!user) {
        return res.status(400).send({error: 'User not found'})
      }

      // check if token exists and delete it
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

      const link = `/passwordReset?token=${resetToken}&id=${user._id}`;
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
      console.error(err);
    }
  }
}

// the following part was there before changes. Restore if my code is not working. 

// const emailController = {
//   send: async (req, res) => {
//     try {
//       sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

//       const msg = {
//         to: `${req.body.recipient}`,
//         // Change to your recipient
//         from: 'behelp.be@gmail.com',
//         // From can not be changed
//         subject: 'New Message from BeHelp',
//         html: `<div style="color: blue">${req.body.message}</div>`,
//       };

//       sendgrid
//         .send(msg)
//         .then((resp) => {
//           console.log('Email sent\n');
//         })
//         .then(res.status(200).send(`SUCCESS: email sent`))
//         .catch((error) => {
//           res.status(500).send(error);
//           console.error(error);
//         });
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   },
// };

module.exports = emailController;
