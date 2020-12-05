const router = require("express").Router();
const path = require("path");
const mongoose = require("mongoose");
const User = require("../models/User");

//route - '/contest'
//method - GET
router.get("/", async (req, res) => {
  let users = await User.find({});
  res.render(path.join(__dirname, "../", "/views/contest"), {
    users,
  });
});

module.exports = router;
