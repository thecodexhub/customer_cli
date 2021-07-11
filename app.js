const mongoose = require("mongoose");

// Import Customer model
const Customer = require("./models/customer");

// Map global promise => get rid of warnings
mongoose.Promise = global.Promise;

// Connect DB
const db = mongoose.connect("mongodb://localhost:27017/customercli", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Add Customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New Customer added");
    mongoose.connection.close();
  });
};

// FInd Customer
const findCustomer = (name) => {
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customers) => {
      console.info(customers);
      console.info(`${customers.length} matches`);
      mongoose.connection.close();
    }
  );
};

// Update Customer
const updateCustomer = (_id, customer) => {
  Customer.updateOne({ _id }, customer).then((customer) => {
    console.info("Customer updated");
    mongoose.connection.close();
  });
};

// Remove Customer
const removeCustomer = (_id) => {
  Customer.deleteOne({ _id }).then((customer) => {
    console.info("Customer removed");
    mongoose.connection.close();
  });
};

// List of Customers
const listCustomers = () => {
  Customer.find().then((customers) => {
    console.info(customers);
    console.info(`${customers.length} customers`);
    mongoose.connection.close();
  });
};

// Export Methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers,
};
