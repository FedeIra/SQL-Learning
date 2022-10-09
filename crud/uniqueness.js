require('../connection');

const User = require('../models/User');

// create user:
const createUser = async () => {
  try {
    const newUser = await User.create({
      username: 'Turop',
      password: '12123345',
    });
    return newUser;
  } catch (err) {
    return err;
  }
};

createUser().then((user) => console.log(user));
