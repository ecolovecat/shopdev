"use strict";

const { countMongoConnect } = require("../helpers/countMongoConnect");

const mongoose = require("mongoose");

const serverUrl = "mongodb://localhost:27017/shopDev";

class MongoDatabase {
  static instance = null;
  constructor() {
    this.connect();
  }

  connect() {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(serverUrl)
      .then((_) => {
        console.log("Connect to mongodb success by singleton");
        countMongoConnect();
      })
      .then("Conncet to mongodb fail by singleton");
  }

  static getInstance() {
    if (!MongoDatabase.instance) {
      MongoDatabase.instance = new MongoDatabase();
    }

    return MongoDatabase.instance;
  }
}

const instance = MongoDatabase.getInstance();

module.exports = instance;
