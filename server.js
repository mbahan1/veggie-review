require("dotenv").config();
/* ==== External Modules ==== */
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");

/* ==== Internal Modules ==== */
const routes = require("./routes");

/* ==== Instanced Modules  ==== */
const app = express();

// connect to the MongoDB with mongoose
require("./config/database");

// initialize Oauth process for login requests
require("./config/passport");

/* ====  Configuration  ==== */
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");

/* ====  Middleware  ==== */
// body data middleware
app.use(express.urlencoded({ extended: true }));
// method override middleware
app.use(methodOverride("_method"));

// serve public files
// app.use(express.static("/public"));

app.use("/public", express.static(__dirname+"/public"))

// logger
app.use((req, res, next) => {
	console.log(req.url, req.method);
	next();
});
// session middleware
app.use(
	session({
		secret: "mayonnaise_sandwiches",
		resave: false,
		saveUninitialized: true,
	})
);
// passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Internal Routes
app.use('/', require("./routes/index"));
app.use("/home", require("./routes/home"));
app.use("/veggies", require("./routes/veggies"));
app.use("/reviews", require("./routes/reviews"));
app.use("/patrons", require("./routes/patrons"));
// app.use("/reviews/admin", require("./routes/reviews"));

/* ====  Server Listener  ==== */
app.listen(PORT, () => {
	console.log(`Opinions about vegetables available on ${PORT}!`);
});
