var static = require('./controllers/static');

exports.initialize = function(app) {
	
	/*
	 * Home Page
	 */
	app.get('/', static.get('pages/home'));

};
