const db = require('../models')

// Rest Routes
/*
 * Index - GET - /authors  - Presentational - respond with all authors DONE

 * New - GET - /authors/new  - Presentational Form - a page with a form to create a new author DONE

 * Show - GET - /authors/:id  - Presentational - respond with specific author by id DONE
 * 
 * Create - Post - /authors  - Functional - recieve data from new route to create a author DONE
 * 
 * Edit - GET - /authors/:id/edit  - Presentational Form - respond with a form prefilled with author data
 * 
 * Update - PUT - /authors/:id  - Functional - recieve data from edit to update a specific author
 * 
 * Delete - DELETE - /authors/:id  - Functional - Deletes author by id from request
 */

// Index

const idx = (req, res) => {
	db.Veggies.find({}, function (err, allVeggies) {
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

		const context = { author: foundVeggie }
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
