"use strict";

const mongoose = require("mongoose");

const serverUrl = "mongodb://localhost:27017/shopDev";

mongoose
  .connect(serverUrl)
  .then((_) => console.log("Connect success"))
  .catch((_) => console.log("connect error"));

if (1 === 1) {
  mongoose.set("debug", true);
  mongoose.set("color", true);
}

module.exports = mongoose;
