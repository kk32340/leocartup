const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
  //res.send('Hello, world! This is my Node.js app.');
  res.sendFile(__dirname + '/index.html');
});

// Start the server asynchronously
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });