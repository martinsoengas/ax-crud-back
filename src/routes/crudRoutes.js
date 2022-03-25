const express = require("express");
const routes = express.Router();

const {
  createOneCustomer,
  readAllCustomers,
  updateOneCustomer,
  deleteOneCustomer,
} = require("../controllers/customersController");

const getAllClientsInvoices = require("../controllers/invoicesController");

routes.post("/", createOneCustomer);

routes.get("/", readAllCustomers);

routes.patch("/:id", updateOneCustomer);

routes.delete("/:id", deleteOneCustomer);

routes.get("/invoices", getAllClientsInvoices);

module.exports = routes;
