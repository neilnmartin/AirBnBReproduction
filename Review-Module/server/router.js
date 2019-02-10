const express = require ('express');
const model = require('../model/index.js')
const router = express.Router();

router.get('/data', (req, res) => {
  model.users.find({}).sort({date: -1}).limit(5).exec((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data);
    }
  })
})

router.get('/data/all', (req, res) => {
  model.users.find({}).sort({date: -1}).exec((err,data) => {
    if(err) {
      console.log(err)
    } else {
      res.send(data);
    }
  })
})

router.post('/data', (req, res) => {

})

module.exports = router;