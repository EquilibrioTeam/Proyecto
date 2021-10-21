const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = Product;
