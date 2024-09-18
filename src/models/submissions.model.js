const mongoose = require('mongoose')







const submissions = new mongoose.Schema({
  size: {
    type: String,
  },


  budget: {
    type: String,
  },
  zonename: {
    type: String,
  },
  bprice: {
    type: String,
  },
  tprice: {
    type: String,
  },
  budget: {
    type: String,
  },
  basement: {
    type: String,
  },
  design: {
    type: String,
  },


  cornerplot: {
    type: String,
  },


  plan: {
    type: String,
  },


  downpayment: {
    type: String,
  },


  allocation: {
    type: String,
  },


  poss: {
    type: String,
  },


  quat: {
    type: String,
  },


  mark: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },








});

// Create and export the model
const Sub = mongoose.model('Sub', submissions );

module.exports = Sub;