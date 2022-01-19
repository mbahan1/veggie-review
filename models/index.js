// require
const mongoose = require('mongoose')
// shortcut to mongoose.connection object, created by mongoose.connect
const db = mongoose.connection
const dbUrl = process.env.DATABASE_URL

mongoose
	.connect(dbUrl)
	.then(() =>
		console.log(
			`MongoDB successfully connected at ${db.host}:${db.port}! How dope!`
		)
	)
	.catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err}`))

module.exports = {
	Author: require('./Author'),
	Article: require('./Article'),
}
