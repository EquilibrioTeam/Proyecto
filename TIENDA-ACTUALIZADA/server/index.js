const express = require("express");
const cors = require("cors");
const port = 8080;
const app = express();
const products = require("./routes/Administrador.routes");
const User = require("./routes/Usuarios.router");
const Ventas = require("./routes/Ventas.router");

//connecting with DB
require("./config/database");

//Routes
app.use(cors());
app.use("/Administrador", products);
app.use("/Usuarios", User);
app.use("/Ventas", Ventas);

//HTTP request
app.get("/", async (req, res) => {
  res.send("Pagina principal");
});

//Escuchando al servidor
app.listen(port, () => {
  console.log("Estamos conectados");
});
