const express = require("express");
const cors = require("cors");
const dotenv=require('dotenv')



const dbConnect= require('./dbConnect');
const contactRouter = require("./routes/contact.router");
const liscRouter = require("./routes/lisc.router");
// const planetsRouter = require("./routes/planets/planets.router");
dbConnect();
const app = express();
dotenv.config();
console.log(cors());
app.use(cors({
    origin:'*'
}));
app.use(express.json());
app.use(contactRouter);
app.use(liscRouter);



module.exports = app