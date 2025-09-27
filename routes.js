const express = require('express');
const router = express.Router();

// Định nghĩa các route ở đây
router.get('/transactions', (req, res) => {
  res.send('Danh sách giao dịch');
});

module.exports = router;