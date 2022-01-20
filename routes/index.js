const router = require('express').Router();
const passport = require('passport');

router.get('/', function (req, res) {
	res.render('index', {
        user: req.user,
    });
});

// Google OAuth login route
router.get(
    "/auth/google",
    passport.authenticate("google", 
        { scope: ["profile", "email"] 
    })
);

// Google callback route
router.get(
	'/oauth2callback',
	passport.authenticate('google', 
        {successRedirect: '/students',
		failureRedirect: '/',
	})
);

// OAuth logout route
router.get("/logout", function (req, res) 
{req.logout();
 res.redirect("/");
});

module.exports = {
router, 
veggies: require('./veggies'),
reviews: require('./reviews'),
};
