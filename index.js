//Environmental Variables
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//Initializing Express
const express = require("express");
const app = express();

//View Engine
app.set("view engine", "ejs");

//Express Middlewares
app.use(express.static(__dirname + "/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Mongoose
const mongoose = require("mongoose");
const connectDB = require("./config/db");
connectDB();

//Routes
app.use("/", require("./routes/index"));
app.use("/joincontest", require("./routes/joincontest"));
app.use("/contest", require("./routes/contest"));

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
