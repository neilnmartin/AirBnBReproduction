const Sequelize = require('sequelize');
const { FECdb } = require('./index');

const WhereWellBe = FECdb.define('wherewellbe', {
  mapimageurl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const WhensAvailable = FECdb.define('whensavailable', {
  booked: {
    type: Sequelize.DATE,
    allowNull: false
  },
  openings: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

FECdb.sync()
.then(() => {
  console.log('Successfully synced FECdb!');
})
.catch((err) => {
  console.log(err);
});

  module.exports = {
    WhereWellBe,
    WhensAvailable
  }