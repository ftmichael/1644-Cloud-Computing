const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  toy: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status: String,
});

const productDB = mongoose.model('product', schema);

module.exports = productDB;
