const resetPasswordManager = require('../business-logic/reset');
const hash = require('../middleware/hashing');
const auth = require('../middleware/auth');

const resetPasswordController = async (req, res, next) => {
    try {
        const {password} = req.body.password;
        // const { token } = req.params;
        // const decoded = jwtToken.verifyToken(token);
        const hashedPassword;

    } catch (error) {
        res.status(500).send(err);
    }
    // const resetPassword = await resetPasswordManager.resetPassword(
    //     req.body.userId,
    //     req.body.token,
    //     req.body.password
    // );
    // return res.json(resetPasswordService);
};

module.exports = resetPasswordController;
