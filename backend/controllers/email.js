// const loginManager = require('../business-logic/login');
require('dotenv').config({ path: './.env' });

const sendgrid = require('@sendgrid/mail');

const emailController = {
  send: async (req, res) => {
    try {
      sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: `${req.body.recipient}`,
        // Change to your recipient
        from: 'behelp.be@gmail.com',
        // From can not be changed
        subject: 'New Message from BeHelp',
        html: `<div style="color: blue">${req.body.message}</div>`,
      };

      sendgrid
        .send(msg)
        .then((resp) => {
          console.log('Email sent\n');
        })
        .then(res.status(200).send(`SUCCESS: email sent`))
        .catch((error) => {
          res.status(500).send(error);
          console.error(error);
        });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = emailController;
