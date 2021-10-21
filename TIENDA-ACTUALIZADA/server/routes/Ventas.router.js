const express = require("express");
const router = express.Router();
const Venta = require("../models/Venta");
const mongoose = require("mongoose");

//connecting with DB
require("../config/database");

//middlewares
router.use(express.json());
router.use(express.urlencoded());

router.get("/", async (req, res) => {
  const Ventas = await Venta.find();
  res.json(Ventas);
});

router.post("/", async (req, res) => {
  await Venta.insertMany(req.body);
  console.log(req.body);
  const Ventas = await Venta.find();
  res.json(Ventas);
});

module.exports = router;
