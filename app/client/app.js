

var app = angular.module('app', ['ui.router','ui.bootstrap', 'ngSanitize', 'ngCookies', 'DonutModule', 'BarModule', 'LineModule']);

var apiFactory = require('./factories/api');

app.controller('donutController', function($scope , donutProvider){    
	donutProvider.createDonut();
});

app.controller('modalSettingsCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
        transclude: true,
        restrict: 'E',
      templateUrl: '/assets/views/partials/configForm.hbs',
      controller: 'ModalInstanceCtrl',
        
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

app.controller('barController', function($scope , barProvider){    
	var config = new Object();
	var data = [ {x:'A', y:.08167}, {x:'B', y:	.01492}, {x:'C', y:	.02782}];

	config.x = $(window).width()* 0.567 * 0.5 ;
	config.y = $(window).height() * 0.35 ;

	barProvider.createBarChart('thirdPanelText', data, config);
	
		var config = new Object();
		var data = [ {x:'A', y:.08167}, {x:'B', y:	.01492}, {x:'C', y:	.02782}];
		
		config.x = $(window).width()* 0.567 * 0.5 ;
		config.y = $(window).height() * 0.35 ;
	
	barProvider.createBarChart('secondPanelText', data, config);
	
});


app.controller('lineController', function($scope , lineProvider){    
	lineProvider.lineChart();
});
app.factory('apiFactory', apiFactory);

      $("#firstPanelRefresh").click(function (e) {
			
			e.preventDefault();			
			//The #firstPanel refresh data has to be shown
//			createDonut();
			
					
		});
		$("#secondPanelRefresh").click(function (e) {
//			createBarChart();
			e.preventDefault();			
			//The #firstPanel refresh data has to be shown
				
		});
		$("#thirdPanelRefresh").click(function (e) {
//			createBarChart();
			e.preventDefault();			
			//The #firstPanel refresh data has to be shown
			$("#thirdPanelText").html("<p>New Data</p>");			
		});
		$("#fourthPanelRefresh").click(function (e) {
			e.preventDefault();			
			//The #firstPanel refresh data has to be shown
//		  lineChart();				
		});
		$("#firstPanelRemove").click(function (e) {
			e.preventDefault();				
			$("#firstPanelText").html("");			
		});
		$("#secondPanelRemove").click(function (e) {
			e.preventDefault();				
			$("#secondPanelText").html("");			
		});
		$("#thirdPanelRemove").click(function (e) {
			e.preventDefault();				
			$("#thirdPanelText").html("");			
		});
		$("#fourthPanelRemove").click(function (e) {
			e.preventDefault();			
			$("#fourthPanelText").html("");			
		});
		
		

//		donut.createDonut();
//		lineChart.lineChart();
		
		//Set up parameters for BarCharts
		var config = new Object();
		var data = [ {x:'A', y:.08167}, {x:'B', y:	.01492}, {x:'C', y:	.02782}];
		
		config.x = $(window).width()* 0.567 * 0.5 ;
		config.y = $(window).height() * 0.35 ;
		
	//	barChart.createBarChart("secondPanelText", data, config );
		
		var config = new Object();
		var data = [ {x:'A', y:.08167}, {x:'B', y:	.01492}, {x:'C', y:	.02782}];
		
		config.x = $(window).width()* 0.567 * 0.5 ;
		config.y = $(window).height() * 0.35 ;		
	//	barChart.createBarChart("thirdPanelText", data, config );
		
		$(window).resize( function (){

//			donut.createDonut();
			$("#" + "boxed").load();
//			lineChart.lineChart();

			//Set up parameters for BarCharts
			var config = new Object();
			var data = [ {x:'A', y:.08167}, {x:'B', y:	.01492}, {x:'C', y:	.02782}];
			
			config.x = $(window).width()* 0.567 * 0.5 ;
			config.y = $(window).height() * 0.35;
			
		//	barChart.createBarChart("secondPanelText", data, config );
			
			config.x = $(window).width()* 0.567 * 0.5 ;
			config.y = $(window).height() * 0.35 ;		
		//	barChart.createBarChart("thirdPanelText", data, config );

        });		