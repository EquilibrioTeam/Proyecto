const express = require("express");
const router = express.Router();
const User = require("../models/Usuarios");

//middlewares
router.use(express.json());
router.use(express.urlencoded());

router.get("/", async (req, res) => {
  const Users = await User.find();
  res.json(Users);
});

router.post("/", async (req, res) => {
  await User.insertMany(req.body);
  console.log(req.body);
  const Users = await User.find();
  res.json(Users);
});

router.delete("/", async (req, res) => {
  await User.findOneAndDelete({ _id: req.body });
  console.log(req.body);
  const Users = await User.find();
  res.json(Users);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  await User.findOneAndUpdate(
    { _id: id },
    {
      $set: { ...req.body },
    }
  );
  const Users = await User.find();
  res.json(Users);
});

module.exports = router;
