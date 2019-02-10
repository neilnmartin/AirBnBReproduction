const express = require('express');
const parser = require('body-parser');
const path = require('path');
const { router } = require('./router');
const { FECdb } = require('../database');

const app = express();
const PORT = 3003;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../static')));

app.use('/api', router);

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error connecting to PORT:', err);
  }
  console.log('Successfully connected to PORT: ', PORT);
});