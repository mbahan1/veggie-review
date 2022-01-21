/* ==== Instanced Modules  ==== */
const express = require("express");
const app = express();

//Home Route
function homeIndex(req, res) {
	res.render("home", {
		user: req.user,
	});
}

// 404 Route
app.get((req, res) => {
	res.send("404! Error! Page not found :(");
});

module.exports = {
	homeIndex,
};
