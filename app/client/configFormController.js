var countryControllers = angular.module('countryControllers', ['DonutModule']);



countryControllers.controller('graphController', function($scope , donutProvider){    
	
	donutProvider.createDonut();
});