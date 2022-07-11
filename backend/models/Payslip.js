const mongoose = require("mongoose");

const Payslip = new mongoose.Schema(
  {
    payslip_id: {
      type: String,
      unique:true
    },
    name: {
      type: String,
    },
    email_id: {
      type: String,
    },
    phone: {
      type: String,
    },
    department: {
      type: String,
    },
    details: {
      type: String,
    },
    type:{
      type:String
    },
    amount: {
      type: String,
    },
    cost_center: {
      type: String,
    },
    hod: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payslip", Payslip);
