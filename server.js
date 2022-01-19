require('dotenv').config();
/* ==== External Modules ==== */
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');

/* ==== Internal Modules ==== */
const routes = require('./routes');

/* ==== Instanced Modules  ==== */
const app = express();

// connect to the MongoDB and passport with mongoose
require('./config/database');
require('./config/passport');

/* ====  Configuration  ==== */
const PORT = 4000

app.set('view engine', 'ejs')

/* ====  Middleware  ==== */
// body data middleware
app.use(express.urlencoded({ extended: true }))
// method override middleware
app.use(methodOverride('_method'))
// serve public files
app.use(express.static('public'))
// logger
app.use((req, res, next) => {
	console.log(req.url, req.method)
	next()
})
// session middleware
app.use(
	session({
		secret: "Mayonnaise Sandwiches",
		resave: false,
		saveUninitialized: true,
	})
)
// mount passport
app.use(passport.initialize())
app.use(passport.session())

/* ====  Routes & Controllers  ==== */
//Home Route
app.get('/', (req, res) => {
	res.render('home')
})
//404 Route
app.get((req, res) => {
	res.send('404! Error! Page not found :(')
})
//Internal Routes
app.use('/veggies', routes.veggies)
app.use('/reviews', routes.reviews)

/* ====  Server Listener  ==== */
app.listen(PORT, () => {
	console.log(`Dope vegetable reviews available on http://localhost:${PORT}!`)
})
