const express = require('express');
const router = express.Router();

// Define routes here
router.get('/transactions', (req, res) => {
  res.send('Transaction list');
});

module.exports = router;