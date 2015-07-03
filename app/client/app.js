

var app = angular.module('app', ['ui.router', 'ngSanitize', 'ngCookies']);

var apiFactory = require('./factories/api');

var donut = require('./donut.js');
var lineChart = require('./lineChart.js');
var barChart = require('./barChart.js');


app.factory('apiFactory', apiFactory);

      $("#firstPanelRefresh").click(function (e) {
			
			e.preventDefault();			
			//The #firstPanel refresh data has to be shown
			createDonut();
			
					
		});
		$("#secondPanelRefresh").click(function (e) {
			createBarChart();
			e.preventDefault();			
			//The #firstPanel refresh data has to be shown
				
		});
		$("#thirdPanelRefresh").click(function (e) {
			createBarChart();
			e.preventDefault();			
			//The #firstPanel refresh data has to be shown
			$("#thirdPanelText").html("<p>New Data</p>");			
		});
		$("#fourthPanelRefresh").click(function (e) {
			e.preventDefault();			
			//The #firstPanel refresh data has to be shown
			lineChart();				
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
		
		

		donut.createDonut();
		lineChart.lineChart();
		
		//Set up parameters for BarCharts
		var config = new Object();
		var data = [ {x:'A', y:.08167}, {x:'B', y:	.01492}, {x:'C', y:	.02782}];
		
		config.x = $(window).width()* 0.567 * 0.5 ;
		config.y = $(window).height() * 0.35 ;
		
		barChart.createBarChart("secondPanelText", data, config );
		
		var config = new Object();
		var data = [ {x:'A', y:.08167}, {x:'B', y:	.01492}, {x:'C', y:	.02782}];
		
		config.x = $(window).width()* 0.567 * 0.5 ;
		config.y = $(window).height() * 0.35 ;		
		barChart.createBarChart("thirdPanelText", data, config );
		
		$(window).resize( function (){

			donut.createDonut();
			$("#" + "boxed").load();
			lineChart.lineChart();

			//Set up parameters for BarCharts
			var config = new Object();
			var data = [ {x:'A', y:.08167}, {x:'B', y:	.01492}, {x:'C', y:	.02782}];
			
			config.x = $(window).width()* 0.567 * 0.5 ;
			config.y = $(window).height() * 0.35;
			
			barChart.createBarChart("secondPanelText", data, config );
			
			config.x = $(window).width()* 0.567 * 0.5 ;
			config.y = $(window).height() * 0.35 ;		
			barChart.createBarChart("thirdPanelText", data, config );

        });		