const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../.env' });

const tokenSecret = process.env.TOKENSECRET;

const persistentDataAccess = require('../data-access/persistent');

const userStore = persistentDataAccess('User');

exports.loginManager = {
  read: async (user, pass) => {
    const loginData = {
      user,
      pass,
    };
    const allUsers = await userStore.all();
    // console.log(`allusers: ${allUsers}`);
    const userExist = allUsers.find((e) => e.username === loginData.user);
    // console.log(`tokenSecret: ${tokenSecret}`);
    const token = jwt.sign(
      {
        user,
      },
      tokenSecret,
      {
        expiresIn: '15m',
      },
    );

    const cryptCheck = async (p1, p2) => {
      const checkResult = await bcrypt.compare(p1, p2);
      return [checkResult, token];
    };

    return cryptCheck(loginData.pass, userExist.password);
  },
};
