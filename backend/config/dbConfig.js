const mongoose = require("mongoose");
const colors = require("colors");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI);

const connectionDb = mongoose.connection;

connectionDb.on("error", (error) => {
  console.log(error);
});

connectionDb.on("connected", () => {
  console.log(`MongoDB connected: ${connectionDb.host}`.cyan.underline);
});

module.exports = connectionDb;
