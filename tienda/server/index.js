const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cors = require("cors");
const port = 8080;
const app = express();

//connecting with DB
const user = "Julac";
const password = "Arbey3104184248";
const db = "cluster0";
const uri = `mongodb+srv://${user}:${password}@cluster0.d23en.mongodb.net/${db}?retryWrites=true&w=majority`;
const productSchema = new Schema({
  nombre_producto: {
    type: String,
    required: true,
  },
  tipo_producto: {
    type: String,
    required: true,
  },
  referencia_producto: {
    type: String,
    required: true,
  },
  talla_producto: {
    type: String,
    required: true,
  },
  marca_producto: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => console.error(e));

//MIddlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//HTTP request
app.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/", async (req, res) => {
  await Product.insertMany(req.body);
  console.log(req.body);
  const products = await Product.find();
  res.json(products);
});

app.delete("/s", async(req,res)=>{
  await Product.deleteOne()
})

//Escuchando al servidor
app.listen(port, () => {
  console.log("Estamos conectados");
});
