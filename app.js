const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Node.js app deployed via Jenkins, Docker, and Kubernetes!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

