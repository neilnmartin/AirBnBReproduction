const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/capStoneUsers";
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String
  },
  img: { type: String },
  review: {
    type: String
  },
  date: { type: Date }
});

const users = mongoose.model("users", userSchema);

module.exports = { users };
