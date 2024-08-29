const express = require('express');
const app = express();
// const favicon = require('serve-favicon');

const port = process.env.PORT || 3000;

// app.use(favicon('./public/favicon.ico'));

// Define a route
app.get('/api', (req, res) => {  
  res.send('Api call');
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});