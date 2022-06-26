const express = require("express");
const payslip =require('./routers/payslip');
const dotenv=require('dotenv')
const mongoose =require('mongoose')
const app = express();
const router = express.Router();
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json());

app.use("/",payslip)

const PORT = process.env.PORT || 8800
app.listen(PORT, () => {
  console.log("Backend server is running!", PORT);
});