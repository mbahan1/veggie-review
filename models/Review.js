const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
	{
		title: { 
			type: String,
			required: [true, "You must provide a review title"],
		},
		body: {
			type: String,
			required: [true, "You must provide text for your review"],
		},
        rating: { 
			type: Number,
			required: [true, "You must provide a rating for your review"],

		},
        //referenced relationship
        veggie: {type: mongoose.Schema.Types.ObjectId, ref:"Veggie"},
		patron: {type: mongoose.Schema.Types.ObjectId, ref:"Patron"},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Review", reviewSchema);
