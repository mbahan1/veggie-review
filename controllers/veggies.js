const db = require('../models')

// Rest Routes
/*
 * Index - GET - /veggies  - Presentational - respond with all veggies DONE
 * New - GET - /veggies/new  - Presentational Form - a page with a form to create a new veggie DONE
 * Show - GET - /veggies/:id  - Presentational - respond with specific veggie by id DONE
 * Create - Post - /veggies  - Functional - recieve data from new route to create a veggie DONE
 * Edit - GET - /veggies/:id/edit  - Presentational Form - respond with a form prefilled with veggie data
 * Update - PUT - /veggies/:id  - Functional - recieve data from edit to update a specific veggie
 * Delete - DELETE - /veggies/:id  - Functional - Deletes veggie by id from request
 */

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
	db.Veggie.findById(req.params.id, function (err, foundVeggie) {
		if (err) return res.send(err)

		const context = { veggie: foundVeggie }
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
