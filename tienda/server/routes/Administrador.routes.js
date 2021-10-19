const express = require("express");
const router = express.Router();
const Product = require("../models/producto");

//middlewares
router.use(express.json());
router.use(express.urlencoded());
