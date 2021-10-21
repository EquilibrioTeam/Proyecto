const express = require("express");
const router = express.Router();
const Product = require("../models/producto");

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

router.delete("/", async (req, res) => {
  await Product.findOneAndDelete({ _id: req.body });
  console.log(req.body);
  const products = await Product.find();
  res.json(products);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  await Product.findOneAndUpdate(
    { _id: id },
    {
      $set: { ...req.body },
    }
  );
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
