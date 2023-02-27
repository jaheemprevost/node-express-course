require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes/routes');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/v1', routes);

const start = async () => {
  try {
    app.listen(3000, console.log('Server is listening on port 3000...'));
  } catch(error) {
    console.error(error);
  }
}

start();
