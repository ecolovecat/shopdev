const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "hehe" });
});

module.exports = app;
