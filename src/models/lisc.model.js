const mongoose = require('mongoose');
const lisc = mongoose.Schema({
    email:{type:String,required:true},
    lisc:{type:String, required:true},
    token:{type:String},
    keystatus:{type:String, required:true},
    chromeProfile:{type:String, required:true},
})


const Lisc = mongoose.model('Lisc',lisc)

module.exports= Lisc;