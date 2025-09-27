const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Transaction endpoint
app.post('/transaction', (req, res) => {
  // Process transaction
  res.status(200).send('Transaction completed successfully!');
});

module.exports = app;