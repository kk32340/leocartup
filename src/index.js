const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route
app.get('/api', (req, res) => {  
  res.send('Api call');
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});