const userManager = require('../business-logic/users');

module.exports = registerController = {

post: async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData);
        const result = await userManager.postUser(userData);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}
}

module.exports = registerController;
