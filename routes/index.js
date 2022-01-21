const router = require('express').Router();
const passport = require('passport');

router.get('/', function (req, res) {
	res.render('home', {
        user: req.user,
    });
});

// Google OAuth login route
router.get(
    "/auth/google",
    passport.authenticate("google", 
    {scope: ["profile", "email"] 
    })
);

// Google OAuth callback route, req. after user login
router.get(
    "/oauth2callback",passport.authenticate("google", 
        {successRedirect: '/patrons',
        failureRedirect: '/',
	})
);

// Google OAuth logout route
router.get("/logout", function (req, res) 
    {req.logout(); // destroy log in session from storage
    res.redirect("/"); // send user to homepage
    });

module.exports = {
    router, 
    veggies: require('./veggies'),
    reviews: require('./reviews'),
    patrons: require('./patrons'),
};
