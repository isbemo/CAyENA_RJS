const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
	? process.env.MONGODB_URI 
	: 'mongodb://localhost/databasetest' ;

mongoose.connect(URI, function(err) {
	if (err) throw err;
	console.log('Successfully connected')
});

const connection = mongoose.connection;

connection.once('Open', () => {
	console.log('DB is connected');
});