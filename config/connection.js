const mongoose = require('mongoose');

// connects to mongodb
mongoose.connect('mongodb://localhost:27017/socialNetworkDB');

module.exports = mongoose.connection;

