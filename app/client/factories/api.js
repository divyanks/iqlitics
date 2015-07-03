
module.exports = ['$http', function($http) {
	
	var baseUrl = '/api/v1';
	var apiFactory = {};
	
	apiFactory.get = function(path, params, cb, canceller) {
		var paramsObj = {params: params};
		if (canceller) {
			paramsObj.timeout = canceller;
		}

		$http.get(baseUrl + path, paramsObj).
		success(function(data) {
			// console.log('getting data:', data);
			return cb(null, data);
		}).
		error(function(data, status) {
			return cb(data !== null ? data.message : "There was an error");
		});
	};
	
	apiFactory.post = function(path, params, cb) {
		$http({
			method: 'POST',
			url: baseUrl + path,
			data: $.param(params),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).
		success(function(data) {
			cb(null, data);
		}).
		error(function(data, status) {
			return cb(data !== null ? data.message : "There was an error");
		});		
	};
	
	apiFactory.postJSON = function(path, params, cb) {
		$http({
			method: 'POST',
			url: baseUrl + path,
			data: JSON.stringify(params),
			headers: {'Content-Type': 'application/json'}
		}).
		success(function(data) {
			cb(null, data);
		}).
		error(function(data, status) {
			return cb(data !== null ? data.message : "There was an error");
		});	
	};
	
	return apiFactory;
}];
