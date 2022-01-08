const registerManager = require('../business-logic/register');

const registerController = {
    post: async (req, res) => {
        try {
            const userData = req.body;
            const user = await registerManager.getUserByEmail(userData.email);
        if (
            !userData.firstName ||
            !userData.lastName ||
            !userData.email ||
            !userData.password ||
            !userData.gender
        ) {
            console.log('=====', res.error);
            res.status(400).send({ message: 'Please fill in all fields ' });
        } else if (user) {
            res.status(400).send({ message: 'email already exists' });
        } else if (userData.password.length < 6) {
            res
                .status(400)
                .send({ message: 'Password should be at least 6 characters' });
        } else {
            const newUser = await registerManager.postUser(userData);
            res
                .status(201)
                .send({
                message: `saved user: ${newUser.firstName} ${newUser.lastName}`,
                });
        }
        } catch (error) {
            res.status(500).send(error);
        }
    },
}

module.exports = registerController;