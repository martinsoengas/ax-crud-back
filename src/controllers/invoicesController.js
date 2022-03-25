const connection = require("../database/db");

const getAllClientsInvoices = (req, res) => {
  connection.query(
    "SELECT facturas.*, clientes.nombre FROM facturas INNER JOIN clientes ON clientes.id  =  facturas.idCliente",
    (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
};

module.exports = getAllClientsInvoices;
