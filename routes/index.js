const router = require('express').Router();
const passport = require('passport');

router.get('/', function (req, res) {
	res.render('index')
})

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

module.exports = {
    router,
	veggies: require('./veggies'),
	reviews: require('./reviews'),
}
