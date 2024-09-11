const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = 3001; // Port number 
const app = express(); 

// Middleware to parse URL-encoded data 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routing using the routes defined in the './routes' module
app.use(routes);

// Connect to the database and start the server once the connection is established
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for social backend running on port ${PORT}!`);
  });
});


