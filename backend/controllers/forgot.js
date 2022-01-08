const forgotPasswordManager = require('../business-logic/forgot');

const forgotPasswordController = {
    forgot: async (req, res, next) => {
    const forgotPasswordService = await forgotPasswordManager.forgotPassword(
        req.body.email
    );
    return res.json(forgotPasswordService);
    },
}

module.exports = forgotPasswordController;
