require('../connection');

const Product = require('../models/Product');

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
  } catch (err) {
    return err;
  }
};

// deleteProduct('634228c15a011fd53b5f6ad1').then((deletedProduct) =>
//   console.log(deletedProduct)
// );

const deleteOneProduct = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
  } catch (err) {
    return err;
  }
};

// deleteProduct('634228c15a011fd53b5f6ad1').then((deletedProduct) =>
//   console.log(deletedProduct)
// );

/* delete many products: */
const deleteProducts = async () => {
  try {
    const deletedProduct = await Product.findOneAndDelete({ name: 'latop' });
    return deletedProduct;
  } catch (err) {
    return err;
  }
};

deleteProducts().then((deletedProduct) => console.log(deletedProduct));

const deleteOneProduct2 = async () => {
  try {
    const deletedProduct = await Product.deleteOne({ name: 'iPhone 12' });
    return deletedProduct;
  } catch (err) {
    return err;
  }
};

deleteOneProduct2().then((deletedProduct) => console.log(deletedProduct));
