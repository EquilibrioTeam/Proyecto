const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ventaSchema = new Schema({
  id_venta: {
    type: String,
    required: true,
  },
  fecha_compra: {
    type: String,
    required: true,
  },
  cantidad: {
    type: String,
    required: true,
  },
  valor_compra: {
    type: String,
    required: true,
  },
  articulo: {
    type: String,
    required: true,
  },
  vendedor: {
    type: String,
    required: true,
  },
  comprador: {
    type: String,
    required: true,
  },
  id_comprador: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Venta", ventaSchema);

module.exports = Product;
