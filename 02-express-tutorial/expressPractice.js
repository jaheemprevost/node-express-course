const express = require('express');
const path = require('path');
const consoleLog = require('./practice-middleware');

const app = express();

app.use(consoleLog);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './new-public/index.html'));
})

app.get('/sample', (req, res) => {
  res.status(200).send('This is working');
})

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
})
