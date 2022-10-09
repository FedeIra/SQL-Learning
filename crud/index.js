require('../connection');

const Product = require('../models/Product');

//add new product using async await:

const addProduct = async () => {
  try {
    const newProduct = await Product.create({
      name: 'Iphone 8',
      description: 'This is a new product',
      price: 100,
    });
    return newProduct;
  } catch (err) {
    return err;
  }
};

addProduct().then((newProduct) => console.log(newProduct));

// const product = new Product({
//   name: 'iPhone 12',
//   description: 'The new iPhone 12',
//   price: 1000,
// });

// product.save((err, document) => {
//   if (err) console.log(err);
//   console.log(document);
// });

// console.log(product);

// route to add product:
// app.post('/products', async (req, res) => {
//   try {
//     const newProduct = await Product.create(req.body);
//     res.status(201).json(newProduct);
//   } catch (err) {
//     console.log(err);
//   }
// });
