// const Patron = require("../models/Patron");
const db = require("../models");


module.exports = {
	index,
	// addFact,
	// delFact,
};

function index(req, res, next) {
	db.Patron.find({}, function (err, patrons) {
		res.render("patrons/index", {
			patrons,
			user: req.user
		});
	});
}

// function addFact(req, res) {}

// function delFact(req, res) {}
