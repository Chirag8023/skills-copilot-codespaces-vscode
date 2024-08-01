// Create web server
// 1. Importing the express library
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a port number
const port = 3000;

// 4. Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 5. Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});