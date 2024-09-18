const express = require("express");
const cors = require("cors");
const dotenv=require('dotenv')
const zonesRouter = require('./routes/zones.router')
const planRouter = require('./routes/plan.router')

const subRouter = require("./routes/sub.routee");

const dbConnect= require('./dbConnect');
// const planetsRouter = require("./routes/planets/planets.router");
dbConnect();
const app = express();
dotenv.config();
console.log(cors());
app.use(cors({
    origin:'*'
}));
app.use(express.json());
app.use(zonesRouter);
app.use(planRouter);

app.use(subRouter);



module.exports = app