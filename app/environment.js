var express = require('express');

var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');

var flash = require('connect-flash');

var DEV = 'development';
var PROD = 'production';


exports.initialize = function(app) {
	var env = process.env.NODE_ENV || DEV;
	if(env === DEV) {
		console.log('Configuring dev environment');
		app.use(cookieParser());
		app.use(session({
			store: new RedisStore(),
			saveUninitialized: false,
			resave: false, //Don't save the session every request if it hasn't been modified
			secret: '134298ayfhlu0p9adfhlxcv0paewlbdoaweflhadsfo9awe', 
			cookie: {maxAge: 60 * 60 * 24 * 7 * 1000}
		}));
		app.use(flash());
	} else {
		console.log('Configuring prod environment');
		app.use(cookieParser());
		app.use(session({
			store: new RedisStore(),
			saveUninitialized: false,
			resave: false, //Don't save the session every request if it hasn't been modified
			secret: '134298ayfhlu0p9adfhlxcv0paewlbdoaweflhadsfo9awe',
			cookie: {maxAge: 60 * 60 * 24 * 7 * 1000}
		}));
		app.use(flash());
	}
};