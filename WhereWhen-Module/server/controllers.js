const { WhereWellBe, WhensAvailable } = require('../database/models');

const whereController = {
  get: (req, res) => {
    WhereWellBe.findAll({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  post: (req, res) => {
    const { mapImageUrl, description, price } = req.body;

    WhereWellBe.create({ mapimageurl: mapImageUrl, description: description, price: price })
      .then((data) => {
        res.status(200).send(data + 'was successfully posted in FECdb.');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  put: (req, res) => {
    const { mapImageUrl, description, price } = req.body;
    const { id } = req.query;

    WhereWellBe.update({ mapimageurl: mapImageUrl, description: description, price: price }, { where: { id: id } })
      .then((data) => {
        res.status(200).send(data + 'was sucessfully updated in FECdb.');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  delete: (req, res) => {
    const { id } = req.query;

    WhereWellBe.destroy({ where: {id: id} })
      .then((data) => {
        res.status(202).send(data + 'was deleted from FECdb.');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
}

const whenController = {
  get: (req, res) => {
    WhensAvailable.findAll({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  post: (req, res) => {
    const { booked, openings } = req.body;

    WhensAvailable.create({ booked: booked, openings: openings })
      .then((data) => {
        res.status(201).send(data + 'was successfully posted in FECdb.');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  put: (req, res) => {
    const { booked, openings } = req.body;
    const { id } = req.query;

    WhensAvailable.update({ booked: booked, openings: openings }, { where: { id: id }})
      .then((data) => {
        res.status(200).send(data + 'was successfully updated in FECdb.');
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },
  delete: (req, res) => {
    const { id } = req.query;

    WhensAvailable.destroy({ where: { id: id } })
      .then((data) => {
        res.status(202).send(data + 'was just deleted from FECdb.');
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  }
}

module.exports = {
  whereController,
  whenController
}