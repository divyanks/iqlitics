function createDonut()	
{
	$("#donutChart").empty();
	$("#donutLegend").empty();
	/* Formatting function for row details - modify as you need */
		var dataset = {
		  dataArray: [53245, 28479, 19697, 24037, 40245, 23424],
		};

		var width = $(window).width()* 0.567 * 0.5;
		var height = $(window).height() * 0.35;
			
			
		//Use width to help calculate for radius
		radius = Math.min(width, height) * 0.5;
		$("#donutChart").height();
		
		 //This is to contain the svg within half of the panel area
	
		var color = d3.scale.category20();

		var pie = d3.layout.pie()
					.sort(null);

		var arc = d3.svg.arc()
					.innerRadius((radius - 50)/2)
					.outerRadius(radius - 50);

		var svg = d3.select("#donutChart")
					.style("right", width/3 + "px")
					.append("svg")
					.attr("width", width)
					.attr("height", height)
					.append("g")
					.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		var path = svg.selectAll("path")
						.data(pie(dataset.dataArray))
					  .enter().append("path")
						.attr("fill", function(d, i) { return color(i); })
						.attr("d", arc);
						

						
		var rectWidth = height	/10;
		var rectHeight = rectWidth;
		//bottom:420px; left:820px
	
	//	var str = '<div style="position:relative;bottom:' + bottom + 'px;left:' +  left + 'px "><table style="border-collapse: separate; border-spacing: 0 2em;">';
		var str = '<div style="position:relative;padding-left:8em"><table style="border-collapse: separate; border-spacing: 2em 2em;">';
		var names = ['A', 'B', 'C', 'D', 'E', 'F'];
		dataset.dataArray.forEach(function (d, i) {
			str += '<tr ><td style="width:' + rectWidth + 'px; height:' + rectWidth + 'px;background-color:' + color(i)+ ';"></td><td>' + names[i] + '</td></tr> ';
			
		
			
		});			
		str += '</table></div>';
		
		$("#donutLegend").append(str);		
/*
	// add legend   
	var w = width;
		var legend = svg.append("g")
		  .attr("class", "legend")
		  .attr("x", w - 65)
		  .attr("y", 25)
		  .attr("height", 100)
		  .attr("width", 100);

		legend.selectAll('g').data(['A', 'B', 'C', 'D', 'E','F'])
		  .enter()
		  .append('g')
		  .each(function(d, i) {
			var g = d3.select(this);
			g.append("rect")
			  .attr("x", w - 65)
			  .attr("y", i*25)
			  .attr("width", 10)
			  .attr("height", 10)
			  .style("fill", color(i));
			
			g.append("text")
			  .attr("x", w - 50)
			  .attr("y", i * 25 + 8)
			  .attr("height",30)
			  .attr("width",100)
			  .style("fill", color_hash[String(i)][1])
			  .text(color_hash[String(i)][0]);		
			  
	});
*/					
						
}			
 				
						
						
						