const app = require("./src/app");
const mongoose = require("mongoose");
require("dotenv").config();
const config = require("./src/configs/config");

const PORT = config.app.port || 3001;

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});

process.on("SIGINT", () => {
  console.log(`Port ${PORT} killed`);
  mongoose.disconnect();
});
