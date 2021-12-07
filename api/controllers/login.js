const { loginManager } = require('../business-logic/login');

const loginController = {
  post: async (req, res) => {
    try {
      const header = req.headers;
      console.log(`login attempt by user: ${header.user}`);
      const userCheck = await loginManager.read(header.user, header.pass);
      if (!userCheck[0]) {
        res.status(400).send('ERROR: incorrect password');
        return;
      }
      console.log(`${header.user} logged in! Bearer Token: \n${userCheck[1]}`);
      res
        .status(200)
        .setHeader('Authorization', `Bearer ${userCheck[1]}`)
        .send(`SUCCESS: user logged in! Bearer Token is: \n${userCheck[1]}`);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = loginController;
