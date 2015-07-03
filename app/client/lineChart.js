  
  function lineChart()
  {
		$("#lineChart").empty();
	  //Width and height
	 
		var w= $(window).width()* 0.567 * 0.9;
		var h = $(window).height() * 0.35;
		var padding = 50;
		  
		var now = d3.time.hour.utc(new Date);
		var dataset = [
			[ 
				{x: d3.time.hour.utc.offset(now, -96), y: 1},
				{x: d3.time.hour.utc.offset(now, -80), y: 1},
				{x: d3.time.hour.utc.offset(now, -72), y: 3},
				{x: d3.time.hour.utc.offset(now, -48), y: 5},
				{x: d3.time.hour.utc.offset(now, -24), y: 2},
				{x: d3.time.hour.utc.offset(now, -12), y: 4},
				{x: d3.time.hour.utc.offset(now, -8), y: 0}, 
				{x: d3.time.hour.utc.offset(now, -7), y: 3}, 
				{x: d3.time.hour.utc.offset(now, -6), y: 2}, 
				{x: d3.time.hour.utc.offset(now, -5), y: 3}, 
				{x: d3.time.hour.utc.offset(now, -4), y: 1}, 
				{x: d3.time.hour.utc.offset(now, -3), y: 2}, 
				{x: d3.time.hour.utc.offset(now, -2), y: 3}, 
				{x: d3.time.hour.utc.offset(now, -1), y: 2}, 
				
				{x: now, y: 2}
			]

		];

		var color_hash = {
							0 : ["apple", "#EFB359"]
						 }                      
		
		// Define axis ranges & scales        
		var yExtents = d3.extent(d3.merge(dataset), function (d) { return d.y; });
		var xExtents = d3.extent(d3.merge(dataset), function (d) { return d.x; });
			 
		var xScale = d3.time.scale()
	
			   .domain([xExtents[0], xExtents[1]])
			   .range([padding, w - padding * 2]);

		var yScale = d3.scale.linear()
			   .domain([0, yExtents[1]])
			   .range([h - padding, padding]);


		// Create SVG element
		var svg = d3.select("#lineChart")
						.append("svg")
						.attr("width", w)
						.attr("height", h);


		// Define lines
		var line = d3.svg.line()
						 .interpolate("basis")
						   .x(function(d) { return x(d.x); })
						   .y(function(d) { return y(d.y1, d.y2, d.y3); });

		var pathContainers = svg.selectAll('g.line')
									.data(dataset);

		pathContainers.enter().append('g')
							.attr('class', 'line')
							.attr("style", function(d) {
								return "stroke: " + color_hash[dataset.indexOf(d)][1]; 
							});

		pathContainers.selectAll('path')
		.data(function (d) { return [d]; }) // continues the data from the pathContainer
		.enter().append('path')
		  .attr('d', d3.svg.line()
			.x(function (d) { return xScale(d.x); })
			.y(function (d) { return yScale(d.y); })
		  )		  ;

		// add circles
		pathContainers.selectAll('circle')
		.data(function (d) { return d; })
		.enter().append('circle')
		.attr('cx', function (d) { return xScale(d.x); })
		.attr('cy', function (d) { return yScale(d.y); })
		.attr("class", 'circle')
		.attr('r', 4)
			  .append("rect")
			  .attr("class", "bar")			  
			  .attr("x", function(d) { return xScale(d.x) ; })
			  .attr("width", 20)
			  .attr("y", function(d) { return yScale(d.y); })
			  .attr("height", function(d) { return h - yScale(d.y); });
		  
		//Define X axis
		var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient("bottom")
				.outerTickSize(0)
				.ticks(5);

		//Define Y axis
		var yAxis = d3.svg.axis()
				.scale(yScale)
				.orient("left")
				  .innerTickSize(-w + padding * 3 )
				.outerTickSize(0)
				.ticks(5);

		//Add X axis
		svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(0," + (h - padding) + ")")
		.call(xAxis);

		//Add Y axis
		svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(" + padding + ",0)")
		.call(yAxis);

		/*
		// Add title	  
		svg.append("svg:text")
			   .attr("class", "title")
		   .attr("x", 20)
		   .attr("y", 20)
		   .text("Fruit Bought Per Hour");


		// add legend   
		var legend = svg.append("g")
		  .attr("class", "legend")
		  .attr("x", xScale(xExtents[1] ) + 10)
		  .attr("y", yScale(yExtents[1]))
		  .attr("height", 100)
		  .attr("width", 100);

		legend.selectAll('g').data(dataset)
		  .enter()
		  .append('g')
		  .each(function(d, i) {
			var g = d3.select(this);
			g.append("rect")
			  .attr("x", xScale(xExtents[1] ) + 40)
			  .attr("y", yScale(yExtents[1]) )
			  .attr("width", 10)
			  .attr("height", 10)
			  .style("fill", color_hash[String(i)][1]) ;
			
			g.append("text")
			  .attr("x", xScale(xExtents[1] ) + 60)
			  .attr("y", yScale(yExtents[1]) + 10)
			  .attr("height",30)
			  .attr("width",100)
			  .style("fill", color_hash[String(i)][1])
			  .text(color_hash[String(i)][0]);

		  });
		  */
}