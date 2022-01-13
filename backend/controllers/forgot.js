const forgotManager  = require('../business-logic/forgot');

const forgotPasswordController = {
    sendResetLink: async (req, res) => {
        try {
            const email = req.body.recipient;
            const result = await forgotManager.sendResetLink(email);
            res.status(200).json({"message": "Reset link sent!"});
        } catch (error) {
            console.error(error);
            res.status(500).json({"message": error.message});
        }
    },
    resetPassword: async (req, res) => {
        try {
            await forgotManager.resetPassword (
                req.body._id,
                req.body.token,
                req.body.password,
                req.body.confirmPassword
            );
            return res.json({"message": "password reset successful!"});
        } catch (error) {
            console.error(error);
            res.status(500).send(error.message);
        }
    },
}

module.exports = forgotPasswordController;
