const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const connectionString = process.env.MONGODB_URI || 'mongodb:'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 

});

module.exports = mongoose.connection;