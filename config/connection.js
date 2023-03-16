const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/homework18');

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/homework18'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 

});

module.exports = mongoose.connection;