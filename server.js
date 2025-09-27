const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, (error) => {
  if (error) {
    return console.error('Failed to start server:', error);
  }
  console.log(`Server running at http://localhost:${port}`);
});