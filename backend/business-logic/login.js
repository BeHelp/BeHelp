const { User, mongoose } = require('../data-access/db.js');

const loginManager = {
    getUserByEmail: async (email) => {
        try {
            const user = await User.findOne({ email: email });
            return user;
        } catch (err) {
            console.log(err.message);
        }
    }
}

module.exports = loginManager;