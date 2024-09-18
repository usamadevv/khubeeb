const mongoose = require('mongoose')


const zoneDataSchema = new mongoose.Schema({
  size: {
    type: Number,
    required: true, // 'size' must be a number
  },
  cornerPlot: {
    type: Boolean,
    required: true, // 'cornerPlot' must be boolean
  },
  basement: {
    type: Boolean,
    required: true, // 'basement' must be boolean
  },
  designPreference: {
    type: String,
    enum: ['classic', 'modern'], 
    required: true,
  },
  price: {
    type: String,
    required: true, // 'price' must be a string
  }
});




const zoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Zone name is required'], 
  },
  data: {
    type: [zoneDataSchema], // 'zoneData' must be an array of objects defined above
    validate: {
      validator: function(v) {
        return v.length > 0; 
      },
      message: 'zoneData cannot be empty',
    },
    required: [true, 'zoneData is required'], 
  }
});

// Create and export the model
const Zone = mongoose.model('Zone', zoneSchema);

module.exports = Zone;