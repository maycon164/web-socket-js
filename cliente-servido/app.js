const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: '*' }));
app.get('/hello', (req, res) => {
  res.send('Hello Joao!!!');
});

module.exports = app;
