const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connection = require("../database/index");
const { Event } = require("../database/models");

const server = express();
const port = 3002;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../client/dist/")));

server.get("/events", (req, res) => {
  Event.find({}, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

server.listen(port, () => console.log("Im listening on port", port));
