const emailManager = require('../business-logic/email');

const emailController = {
  sendEmail: async (req, res) => {
    try {
      await emailManager.sendEmail(
        req.body.recipient,
        "behelp.be@gmail.com",
        "New Message from BeHelp",
        `<div style="color: blue">${req.body.message}</div>`
        );
        return res.status(200).send(`SUCCESS: Email successfully sent!`)
    } catch (error) {
      res.status(500).send(error);
    }
  },
}

module.exports = emailController;
