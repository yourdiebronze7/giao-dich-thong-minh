const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Giao Dịch Thông Minh!');
});

app.listen(port, () => {
  console.log(`Server đang chạy ở http://localhost:${port}`);
});