const userManager = require('../business-logic/users');

module.exports = registerController = {
    post: async (req, res) => {
        try {
            const userData = req.body;
            const user = await userManager.getUserByEmail(userData.email);
        if (
            !userData.firstName ||
            !userData.lastName ||
            !userData.email ||
            !userData.password ||
            !userData.dob ||
            !userData.gender
        ) {
            res.status(400).send({ message: 'Please fill in all fields ' });
        } else if (user) {
            res.status(400).send({ message: 'email already exists' });
        } else if (userData.password.length < 6) {
            res
                .status(400)
                .send({ message: 'Password should be at least 6 characters' });
        } else {
            const newUser = await userManager.postUser(userData);
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
    // post: async (req, res) => {
    //     try {
    //         const userData = req.body;
    //         console.log(userData);
    //         const result = await userManager.postUser(userData);
    //         // res.status(201).send(result);
    //         console.log(result);
    //         res.status(201).send(`New user was successfully created!`);
    //     } catch (error) {
    //         res.status(500).send(error);
    //     }
    // }
}

module.exports = registerController;