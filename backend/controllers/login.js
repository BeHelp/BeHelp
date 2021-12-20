const userManager = require('../business-logic/login');
const bcrypt = require('bcryptjs');

const loginController = {
    login: async (req, res) => {
            const userEmailPassword = req.body;
            const user = await userManager.getUserByEmail(userEmailPassword.email);
            if(!user) {
                res.status(400).send({ message: `user doesn't exist!` });
            }
            try {
                if (await bcrypt.compare(userEmailPassword.password, user.password))
                {
                    res.send(`you are logged in!`)
                } else {
                    res.send(`the password is incorrect!`)
                }
            
        } catch (error) {
            res.status(500).send(error);
        } 
    }
};

module.exports = loginController;
