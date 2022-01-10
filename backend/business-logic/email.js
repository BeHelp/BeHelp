require('dotenv').config({ path: './.env' });
const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const emailManager = {
    sendEmail: async (recipient, source, subject, content) => {
    try {
        const email = {
            to: recipient,
            from: source,
            subject: subject,
            html: content,
        };
        const sentEmail = await sendgrid.send(email)
        // .then((res) => {
        //     console.log('Email sent\n');
        //     })
        .then(res.status(200).send(`SUCCESS: email sent`))
        console.log(sentEmail);
        return sentEmail;
        
    } catch(err) {
        res.status(500).send(err);
        console.error(err);
    };
    }
};

module.exports = emailManager;