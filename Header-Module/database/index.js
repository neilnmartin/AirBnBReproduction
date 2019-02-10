const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Event");

var connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error: "));
connection.once("open", () => console.log("CONNECTED YAY"));

module.exports = { connection };
