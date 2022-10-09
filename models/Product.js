const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
  },
  description: String,
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = model('Product', productSchema);
