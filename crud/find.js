require('../connection');

const Product = require('../models/Product');
const User = require('../models/User');

//Encontrar todos los productos:
async function main() {
  const products = await Product.find();
  console.log(products);
}

// main();

// get users:

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    return err;
  }
};

getUsers().then((users) => console.log(users));

// Routes:

// Route to get all products:
// app.get('/products', async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (err) {
//     console.log(err);
//   }
// });
