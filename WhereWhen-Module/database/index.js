const postgres = require("pg");
const Sequelize = require("sequelize");

const FECdb = new Sequelize("wherewhen", "neilmartin", "martin", {
  host: "localhost",
  dialect: "postgres"
});

FECdb.authenticate()
  .then(() => {
    console.log("Successfully authenticated FECdb!");
  })
  .catch(err => {
    console.log(err);
  });

module.exports = {
  FECdb
};
