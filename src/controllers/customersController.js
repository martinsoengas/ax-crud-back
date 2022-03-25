const connection = require("../database/db");

const createOneCustomer = (req, res) => {
  connection.query(`INSERT INTO clientes SET ?`, req.body, (err, result) => {
    if (err) {
      res.status(400).send("Unable to create");
    } else {
      res.status(201).send("Succesfully created");
    }
  });
};

const readAllCustomers = (req, res) => {
  connection.query(`SELECT * FROM clientes`, (err, result) => {
    if (err) {
      res.status(400).send("Unable to fetch");
    } else {
      res.status(200).send(result);
    }
  });
};

const updateOneCustomer = (req, res) => {
  connection.query(
    `UPDATE clientes SET ? WHERE id= ?`,
    [req.body, req.params.id],
    (err, result) => {
      if (err) {
        res.status(400).send("Unable to update");
      } else {
        res.status(200).send("Succesfully updated");
      }
    }
  );
};

const deleteOneCustomer = (req, res) => {
  connection.query(
    `DELETE FROM clientes WHERE id = ?`,
    req.params.id,
    (err, result) => {
      if (err) {
        res.status(400).send("Unable to delete");
      } else {
        res.status(200).send("Succesfully deleted");
      }
    }
  );
};

module.exports = {
  createOneCustomer,
  readAllCustomers,
  updateOneCustomer,
  deleteOneCustomer,
};
