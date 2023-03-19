const mongoose = require('mongoose');
mongoose.connect('mongodb:/localhost:27017/homework18SMA');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/homework18SMA'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 

});

module.exports = mongoose.connection;