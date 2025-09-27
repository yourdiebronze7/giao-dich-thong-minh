const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Transaction endpoint
app.post('/transaction', (req, res) => {
  // Process transaction
  res.send('Transaction has been completed!');
});

module.exports = app;