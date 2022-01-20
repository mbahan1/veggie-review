const mongoose = require('mongoose')

/*
The factSchema is used to embedded docs in as student doc.
There is no model and no 'facts' collection
*/
// const factSchema = new mongoose.Schema(
// 	{
// 		text: String,
// 	},
// 	{
// 		timestamps: true,
// 	}
// )

const userSchema = new mongoose.Schema(
	{
        googleId: { type: String, required: true },
        // name: String,
		// email: String,
		// facts: [factSchema],
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('User', userSchema)
