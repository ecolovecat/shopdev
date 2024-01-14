"use strict";
require("dotenv").config();

// level 0
const configL0 = {
  app: {
    port: 3051,
  },
  db: {
    host: "localhost",
    port: 3036,
    name: "shopDev",
  },
};

// level pro

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 3000,
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: process.env.DEV_DB_PORT || 3036,
    name: process.env.DEV_DB_NAME || "shopDev",
  },
};

const pro = {
  app: {
    port: process.env.PRO_APP_PORT || 3051,
  },
  db: {
    host: process.env.PRO_DB_HOST || "localhost",
    port: process.env.PRO_DB_PORT || 3036,
    name: process.env.PRO_DB_NAME || "shopDev",
  },
};

const config = { dev, pro };

const env = process.env.NODE_ENV || "env";

module.exports = config[env];
