const express = require("express");
const router = express.Router();
const Venta = require("../models/Venta");

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

router.delete("/", async (req, res) => {
  await Venta.findOneAndDelete({ _id: req.body });
  console.log(req.body);
  const Ventas = await Venta.find();
  res.json(Ventas);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  await Venta.findOneAndUpdate(
    { _id: id },
    {
      $set: { ...req.body },
    }
  );
  const Ventas = await Venta.find();
  res.json(Ventas);
});

module.exports = router;
