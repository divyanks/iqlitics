exports.get = function(pageName, options) {
	return function(req, res) {
		res.render(pageName, options);
	};
};

exports.post = function(pageName) {
	return function(req, res) {
		res.render(pageName);
	};
};

exports.redirect = function(path) {
	return function(req, res) {
		res.redirect(path);
	};
};