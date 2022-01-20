const Patron = require("../models/patron");

module.exports = {
	index,
	addFact,
	delFact,
};

function index(req, res, next) {
	Patron.find({}, function (err, patrons) {
		res.render("patrons/index", {
			patrons,
			user: req.user
		});
	});
}

function addFact(req, res) {}

function delFact(req, res) {}
