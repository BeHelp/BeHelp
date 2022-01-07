const forgotPasswordManager = require('../business-logic/forgot');

const forgotPasswordController = {
    forgot: async (req, res, next) => {
    const requestPasswordResetService = await forgotPasswordManager.forgotPassword(
        req.body.email
    );
    return res.json(requestPasswordResetService);
    },
}

module.exports = forgotPasswordController;
