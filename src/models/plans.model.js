const mongoose = require('mongoose')







const planSchema = new mongoose.Schema({
  planName: {
    type: String,
    required: [true, 'Plan name is required'], 
  },
  downPayment: {
    type: Number,
    required: [true, 'Down Payment is required'], 
  }, allocation: {
    type: Number,
    required: [true, 'Allocation is required'], 
  }, possession: {
    type: Number,
    required: [true, 'Possession is required'], 
  }, quarterlyInstallment: {
    type: Number,
    required: [true, 'Quarterly Installment is required'], 
  },
  markup:{
    type: Number,
    required:[true, 'Markup is required'],
  }





});

// Create and export the model
const Plan = mongoose.model('Plan', planSchema );

module.exports = Plan;