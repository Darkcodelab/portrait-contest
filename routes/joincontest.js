const router = require("express").Router();
const path = require("path");
const mongoose = require("mongoose");
const User = require("../models/User");

//route  - '/joincontest'
//method - "GET"

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../", "/views/joincontest"), {
    message: "",
  });
});

router.post("/", async (req, res) => {
  let eUser = await User.findOne({ instagramHandle: req.body.handle });
  if (eUser) {
    res.render(path.join(__dirname, "../", "/views/joincontest"), {
      message: "User already Registered",
    });
  } else {
    let handle = req.body.handle;
    handle = handle.replace(/^@/gi, "");
    let data = {
      name: req.body.name,
      instagramHandle: handle,
    };
    let user = await User.create(data);
    if (user) {
      res.redirect("/contest");
    } else {
      res.render(path.join(__dirname, "../", "/views/joincontest"), {
        message: "Registration Failed",
      });
    }
  }
});

module.exports = router;
