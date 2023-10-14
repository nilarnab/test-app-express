'use strict';
 
const express = require('express');
 
// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
const VERSION = process.env.VERSION || 0
 
// App
const app = express();
app.get('/', (req, res) => {
  console.log("hit")
  res.send('Hello World from version ' + VERSION);
});

app.get('/produce_error', (req, res) => {
  console.log("hit")
  a = 0/0
  res.send('error ');
});
 
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});