const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint khác
app.post('/transaction', (req, res) => {
  // Xử lý giao dịch
  res.send('Giao dịch đã được thực hiện!');
});

module.exports = app;