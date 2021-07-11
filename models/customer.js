const mongoose = require("mongoose");

// Customer Schema
const customerSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  age: { type: Number },
  phone: { type: String },
  email: { type: String },
});

// Define and Export
const model = mongoose.model("Customer", customerSchema);
module.exports = model;
