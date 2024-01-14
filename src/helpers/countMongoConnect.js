"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const SECOND = 5000;

const countMongoConnect = () => {
  const count = mongoose.connections.length;

  console.log(count);
};

const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnections = numCores * 5;

    console.log(`Active conections: ${numConnection}`);
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.log("Connection overload");
    }
  }, SECOND);
};

module.exports = { countMongoConnect, checkOverLoad };
