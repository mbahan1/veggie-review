const mongoose = require('mongoose')

const veggieSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'You must provide a name property'],
		},
		articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
	},
	{
		timestamps: true,
	}
)

// create the model with the schema for use in the rest of our app

// const Author = mongoose.model("Author", authorSchema);

// module.exports = Author;
// same code ^ shorthand export

module.exports = mongoose.model('Veggie', veggieSchema)
