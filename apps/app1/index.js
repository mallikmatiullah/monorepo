const express = require('express');
const app = express();
const PORT = 3001; // You can choose any port

// Define a route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to App1!</h1><p>This is running on Express.js.</p>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`App2 is running at http://localhost:${PORT}`);
});
