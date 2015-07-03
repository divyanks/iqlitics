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
			$("#forthPanelText").html("");			
		});
		
		

		createDonut();
		lineChart();
		
		//Set up parameters for BarCharts
		var config = new Object();
		var data = [ {x:'A', y:.08167}, {x:'B', y:	.01492}, {x:'C', y:	.02782}];
		
		config.x = $(window).width()* 0.567 * 0.5 ;
		config.y = $(window).height() * 0.35 ;
		
		createBarChart("barChart2", data, config );
		
		var config = new Object();
		var data = [ {x:'A', y:.08167}, {x:'B', y:	.01492}, {x:'C', y:	.02782}];
		
		config.x = $(window).width()* 0.567 * 0.5 ;
		config.y = $(window).height() * 0.35 ;		
		createBarChart("barChart3", data, config );
		
		$(window).resize( function (){

			createDonut();
			$("#" + "boxed").load();
			lineChart();

			//Set up parameters for BarCharts
			var config = new Object();
			var data = [ {x:'A', y:.08167}, {x:'B', y:	.01492}, {x:'C', y:	.02782}];
			
			config.x = $(window).width()* 0.567 * 0.5 ;
			config.y = $(window).height() * 0.35;
			
			createBarChart("barChart2", data, config );
			
			config.x = $(window).width()* 0.567 * 0.5 ;
			config.y = $(window).height() * 0.35 ;		
			createBarChart("barChart3", data, config );

		});		