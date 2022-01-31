const db = require("../models");

// Index
const idx = (req, res) => {
	db.Review.find({}, function (err, allReviews) {
		if (err) return res.send(err);
		const context = { reviews: allReviews };
		return res.render("reviews/index", context);
	});
};

// New
const newReview = (req, res) => {
	db.Veggie.find({}, (err, foundVeggies) => {
        if(err) return res.send(err);
        const context = { veggies: foundVeggies};
        res.render("reviews/new", context)
    })
    //res.render("reviews/new");
};

// Show
const show = (req, res) => {
    db.Review.findById(req.params.id)
        .populate("veggie")
        .exec((err, foundReview) => {
            if(err) return res.send(err);
            const context = {review: foundReview};
            res.render("reviews/show", context)
        })
};
// Pasted, above was coded in class
// Create

const create = (req, res) => {
	db.Review.create(req.body, (err, createdReview) => {
		if (err) return res.send(err);
        db.Veggie.findById(createdReview.veggie)
            .exec(function(err, foundVeggie){
                if(err) return res.send(err);
                foundVeggie.reviews.push(createdReview)
                foundVeggie.save();
				res.redirect("reviews");
            })
	});
};

// Edit
const edit = (req, res) => {
	db.Review.findById(req.params.id, (err, foundReview) => {
		if (err) return res.send(err);
		const context = { review: foundReview };
		return res.render("reviews/edit", context);
	});
};
// const edit = (req, res) => {
// 	db.Review.findById(req.params.id)
// 	// .populate("veggie")
// 	// .populate("patron")
// 	.exec((err, foundReview) => {
// 		if (err) return res.send(err);
// 		const context = { review: foundReview };
// 		return res.render("reviews/edit", context);
// 	});
// };

// Update
const update = (req, res) => {
	db.Review.findByIdAndUpdate(req.params.id,
		{
			$set: {...req.body,},
		},
		{ new: true },
		(err, updatedReview) => {
			if (err) return res.send(err);
			return res.redirect(`/reviews/${updatedReview._id}`);
		}
	);
};

// Delete
const destroy = (req, res) => {
	db.Review.findByIdAndDelete(req.params.id, (err, deletedReview) => {
		if (err) return res.send(err);
		return res.redirect("/reviews");
	});
};

module.exports = {
	idx,
	show,
	create,
	newReview,
	edit,
	update,
	destroy,
};