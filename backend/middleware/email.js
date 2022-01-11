require('dotenv').config({ path: './.env' });
const sendgrid = require('@sendgrid/mail');

const sendEmail = async (recipient, source, subject, content) => {
    try {
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
        const email = {
            to: recipient,
            from: source,
            subject: subject,
            html: content,
        };
        const sentEmail = await sendgrid.send(email);
        console.log(sentEmail);
        return sentEmail;
    } catch(err) {
        console.error(err);
        };
    }

module.exports = sendEmail;