const resetPasswordManager = require('../business-logic/reset');

const resetPasswordController = async (req, res, next) => {
    const resetPasswordService = await resetPasswordManager.resetPassword(
        req.body.userId,
        req.body.token,
        req.body.password
    );
    return res.json(resetPasswordService);
};

module.exports = resetPasswordController;