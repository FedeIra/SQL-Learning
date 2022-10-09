require('../connection');

const Product = require('../models/Product');

const createProducts = async () => {
  try {
    const product1 = await Product.create({
      name: 'Laptop Lenovo',
      description: 'This is a new product',
    });
    const product2 = await Product.create({
      name: 'Laptop HP',
      description: 'This is a new product',
    });
    const product3 = await Product.create({
      name: 'Laptop Dell',
      description: 'This is a new product',
    });
    const allProducts = await Product.find();
    return allProducts;
  } catch (err) {
    return err;
  }
};

createProducts().then((allProducts) => console.log(allProducts));
