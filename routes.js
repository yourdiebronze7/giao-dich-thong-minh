const express = require('express');
const router = express.Router();

// Define routes here
router.get('/transactions', (req, res) => {
  res.send('List of all transactions');
});

module.exports = router;