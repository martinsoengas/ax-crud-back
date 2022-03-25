require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
const routes = require("./src/routes/crudRoutes");

app.use(cors());

app.use(express.json());

app.use("/", routes);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () =>
  console.log("Server running on port:", app.get("port"))
);
