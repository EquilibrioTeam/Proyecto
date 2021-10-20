const express = require("express");
const cors = require("cors");
const port = 8080;
const app = express();
const products = require("./routes/Administrador.routes");

//connecting with DB
require("./config/database");

//Routes
app.use(cors());
app.use("/Administrador", products);

//HTTP request
app.get("/", async (req, res) => {
  res.send("Pagina principal");
});

//Escuchando al servidor
app.listen(port, () => {
  console.log("Estamos conectados");
});
