const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		body: { type: String, required: true },
        rating: { type: Number, required: true },
        //referenced relationship
        veggie: {type: mongoose.Schema.Types.ObjectId, ref:"Veggie"},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Review", reviewSchema);
