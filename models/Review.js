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
			type: String,
		},
        //referenced relationship
        veggie: {type: mongoose.Schema.Types.ObjectId, ref:"Veggie", required: [true, "You must choose a veggie for your review"]},
		patron: {type: mongoose.Schema.Types.ObjectId, ref:"Patron"},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Review", reviewSchema);
