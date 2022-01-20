const User = require("../models/user");

module.exports = {
	index,
	addFact,
	delFact,
};

function index(req, res, next) {
    User.find({}, function(err, users)
        res.render('users/index', {
        users,
        user: req.user,
        });
    })
};

function addFact(req, res) {}

function delFact(req, res) {}
