 function createBarChart(id, data, config)
  {
		$("#" + id).empty();
		
		var margin = {top: 20, right: 20, bottom: 30, left: 40};
//		var width = $(window).width()* 0.567 * 0.5 - margin.left - margin.right ;
//		var height = $(window).height() * 0.3 - margin.top - margin.bottom;
		
		var width = config.x - margin.left - margin.right  ;
		var height = config.y - margin.top - margin.bottom;
		
		var x = d3.scale.ordinal()
			.rangeRoundBands([0, width], .5);

		var y = d3.scale.linear()
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom")
			.outerTickSize(0);

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left")
			.ticks(10, "%")
			.outerTickSize(0);

		var svg = d3.select("#" + id).append("svg")
								.attr("width", width + margin.left + margin.right)
								.attr("height", height + margin.top + margin.bottom)
					  .append("g")
						.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	
		  x.domain(data.map(function(d) { return d.x; }));
		  y.domain([0, d3.max(data, function(d) { return d.y; })]);

		  svg.append("g")
			  .attr("class", "x axis")
			  .attr("transform", "translate(0," + height + ")")
			  .call(xAxis);

		  svg.append("g")
			  .attr("class", "y axis")
			  .call(yAxis);

		  svg.selectAll(".bar")
			  .data(data)
			.enter().append("rect")
			  .attr("class", "bar")			  
			  .attr("x", function(d) { return x(d.x) ; })
			  .attr("width", x.rangeBand())
			  .attr("y", function(d) { return y(d.y); })
			  .attr("height", function(d) { return height - y(d.y); });
	

		function type(d) {
		  d.y = +d.y;
		  return d;
		}
	}