const db = require('../models')

// Index
const idx = (req, res) => {
	db.Veggie.find({}, function (err, allVeggies) {
		if (err) return res.send(err)
		const context = { veggies: allVeggies }
		return res.render('veggies/index', context)
	})
}

// Show
const show = (req, res) => {
	console.log(req.params.id)
	db.Veggie.findById(req.params.id).populate("reviews").exec((err, foundVeggie) => {
		if (err) return res.send(err)
		// console.dir(foundVeggie); // uncomment to debug
		const context = { veggie: foundVeggie ,
		user: req.user};
		return res.render('veggies/show', context)
	})
}

// const show = (req, res) => {
// 	console.log(req.params.id)
// 	db.Veggie.findById(req.params.id)
// 		.populate("reviews")
// 		.exec((err, foundVeggie) => {
// 			if (err) return res.send(err);
// 			const context = { veggie: foundVeggie };
// 			return res.render('veggies/show', context);
// 	})
// }

// New
const newVeggie = (req, res) => {
	res.render('veggies/new')
}

// Create
const create = (req, res) => {
	db.Veggie.create(req.body, function (err, createdVeggie) {
		if (err) return res.send(err)

		return res.redirect('/veggies')
	})
}

// Edit

const edit = (req, res) => {
	db.Veggie.findById(req.params.id, (err, foundVeggie) => {
		if (err) return res.send(err)

		const context = { veggie: foundVeggie }
		return res.render('veggies/edit', context)
	})
}

// Update
const update = (req, res) => {
	db.Veggie.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
				...req.body,
			},
		},
		{ new: true },
		(err, updatedVeggie) => {
			if (err) return res.send(err)
			return res.redirect(`/veggies/${updatedVeggies._id}`)
		}
	)
}

// Delete
const destroy = (req, res) => {
	db.Veggie.findByIdAndDelete(req.params.id, (err, deletedVeggies) => {
		if (err) return res.send(err)

		return res.redirect('/veggies')
	})
}

module.exports = {
	idx,
	show,
	create,
	newVeggie,
	edit,
	update,
	destroy,
}
