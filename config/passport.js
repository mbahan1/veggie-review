const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Patron = require("../models/Patron");
const express = require("express");



// passport.use to plug-in login options
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			callbackURL: process.env.GOOGLE_CALLBACK,
		},
		function (accessToken, refreshToken, profile, cb) {
			Patron.findOne({ googleId: profile.id }, function (err, patron) {
				if (err) return cb(err);
				if (patron) {
					return cb(null, patron);
				} else {
					// we have a new Patron via OAuth!
					const newPatron = new Patron({
						name: profile.displayName,
						email: profile.emails[0].value,
						googleId: profile.id,
					});
					newPatron.save(function (err) {
						if (err) return cb(err);
						return cb(null, newPatron);
					});
				}
			});
		}
	)
);

// passport.serializeUser is called once at login to create session
passport.serializeUser(function (patron, done) {
	done(null, patron.id);
});

// passport.deserializeUser is called with each request, decodes cookie, creates req.user 
passport.deserializeUser(function (id, done) {
	Patron.findById(id, function (err, patron) {
		done(err, patron); // creates req.user
	});
});