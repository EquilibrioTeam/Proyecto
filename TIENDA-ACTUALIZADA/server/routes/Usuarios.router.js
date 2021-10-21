const express = require("express");
const router = express.Router();
const User = require("../models/Usuarios");
const mongoose = require("mongoose");

//connecting with DB
require("../config/database");

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

module.exports = router;
