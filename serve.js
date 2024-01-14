const app = require("./src/app");
const mongoose = require("mongoose");

const PORT = 3050;

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});

process.on("SIGINT", () => {
  console.log(`Port ${PORT} killed`);
  mongoose.disconnect();
});
