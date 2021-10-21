const express = require("express");
const router = express.Router();
const Product = require("../models/producto");
const mongoose = require("mongoose");

//connecting with DB
require("../config/database");

//middlewares
router.use(express.json());
router.use(express.urlencoded());

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/", async (req, res) => {
  await Product.insertMany(req.body);
  console.log(req.body);
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
