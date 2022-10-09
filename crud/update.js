require('../connection');

const User = require('../models/User');

/* Update users: */

const updateUser = async (id) => {
  try {
    const user = await User.updateOne({ _id: id }, { username: 'Emilio' });
    return user;
  } catch (err) {
    return err;
  }
};

// updateUser('63422f588c2d739daca51017').then((user) => console.log(user));

const someFunction = async () => {
  const user = await User.findOne({ username: 'Emilio' });
  console.log(user);
  user.password = 'cambié la contraseña de emilio';
  await user.save();
  return user;
};

// someFunction().then((user) => console.log(user));

/* findone user and add user a new property called name:  */

// const someFunction2 = async () => {
//   const user = await User.findOne({ username: 'Emilio' });
//   console.log(user);
//   user.name = 'Emilio name';
//   await user.save();
//   return user;
// };

// someFunction2();

/* find user by id and add new property name: */

// const findUserByIdAndUpdate = async (id) => {
//   try {
//     const user = await User.findByIdAndUpdate(id, {
//       name: 'Emilio is the name',
//     });
//     return user;
//   } catch (err) {
//     return err;
//   }
// };

// findUserByIdAndUpdate('63422f588c2d739daca51017');

// const otherFunction = async () => {
//   const user = await User.findOneAndUpdate(
//     { username: 'Emilio' },
//     { name: 'Add name property' },
//     { new: true }
//   );
//   console.log(user);
// };

// otherFunction();
