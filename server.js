const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, (error) => {
  if (error) {
    console.error('Failed to start server:', error);
    process.exit(1);  // Exit the process if server fails to start
  }
  console.log(`Server running at http://localhost:${port}`);
});