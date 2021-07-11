#! /usr/bin/env node
const program = require("commander");
const { prompt } = require("inquirer");
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers,
} = require("./app");

const questions = [
  {
    type: "input",
    name: "firstname",
    message: "Customer First Name",
  },
  {
    type: "input",
    name: "lastname",
    message: "Customer Last Name",
  },
  {
    type: "input",
    name: "age",
    message: "Customer Age",
  },
  {
    type: "input",
    name: "phone",
    message: "Customer Phone Number",
  },
  {
    type: "input",
    name: "email",
    message: "Customer Email address",
  },
];

program.version("1.0.0").description("Customer management CLI");

// program
//   .command("add <firstname> <lastname> <age> <phone> <email>")
//   .alias("a")
//   .description("add a new customer")
//   .action((firstname, lastname, age, phone, email) => {
//     addCustomer({ firstname, lastname, age, phone, email });
//   });

program
  .command("add")
  .alias("a")
  .description("add a new customer")
  .action(() => {
    prompt(questions).then((answers) => addCustomer(answers));
  });

program
  .command("find <name>")
  .alias("f")
  .description("find a customer")
  .action((name) => {
    findCustomer(name);
  });

program
  .command("update <_id>")
  .alias("u")
  .description("update a specific customer")
  .action((_id) => {
    prompt(questions).then((answers) => updateCustomer(_id, answers));
  });

program
  .command("remove <_id>")
  .alias("r")
  .description("remove a specific customer")
  .action((_id) => {
    removeCustomer(_id);
  });

program
  .command("list")
  .alias("l")
  .description("list of all customers")
  .action(() => {
    listCustomers();
  });

program.parse(process.argv);
