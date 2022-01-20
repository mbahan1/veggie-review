const mongoose = require('mongoose')

const veggieSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "You must provide a name property"],
		},
		origin: {
			type: String,
			required: [true, "You must provide a country of origin property"],
		},
		recipe: {
			type: String,
			required: [true, "You must provide a commonly used in recipe property"],
		},
		scientific_name: {
			type: String,
			required: [true, "You must provide a commonly used a scientific name property"],
		},
		reviews: [{type:mongoose.Schema.Types.ObjectId, ref: "Review"}]
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Veggie', veggieSchema)
