require('../connection');

const User = require('../models/User');

// get user:

const getUser = async () => {
  try {
    const user = await User.findOne({ username: 'Jp' });
    return user;
  } catch (err) {
    return err;
  }
};

getUser().then((user) => console.log(user));
