const registerManager = require('../business-logic/register');

const registerController = {
    post: async (req, res) => {
        try {
            const userData = req.body;
            const userFromDB = await registerManager.getUserByEmail(userData.email);
        if (
            !userData.firstName ||
            !userData.lastName ||
            !userData.email ||
            !userData.password ||
            !userData.gender
        ) {
            console.log('Please fill in all fields')
            res.status(400).send({ message: 'Please fill in all fields' });
        } else if (userFromDB) {
            console.log('email already exists')
            res.status(400).send({ message: 'email already exists' });
        
        } else if (userData.password.length < 6) {
            return res.status(400).send(
                {message: 'Password should be at least 6 characters!'}
            );
        }
        else {
            const newUser = await registerManager.postUser(userData);
            res
                .status(201)
                .send({
                message: `saved userFromDB: ${newUser.firstName} ${newUser.lastName}`,
                });
        }
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    },
}

module.exports = registerController;