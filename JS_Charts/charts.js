//https://d3-graph-gallery.com/graph/barplot_basic.html

generateChart = (data) => {
  document.getElementById("my_dataviz").innerHTML = "";
  // set the dimensions and margins of the graph
  var margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 400 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3
    .select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  //{ high : 10, medium = 10}
  grouped_data = data.reduce((acc, obj) => {
    const key = obj.priority;

    if (acc[key]) {
      totalCount = acc[key] + 1;
    } else {
      totalCount = 1;
    }
    acc[key] = totalCount;
    return acc;
  }, {});

  // formated_data = [
  //   { priority: "high", count: 10 },
  //   { priority: "medium", count: 5 },
  // ];

  const formated_data = Object.entries(grouped_data).map(([key, value]) => ({
    priority: key,
    count: value,
  }));

  var x = d3
    .scaleBand()
    .range([0, width])
    .domain(
      data.map(function (d) {
        return d.priority;
      })
    )
    .padding(0.2);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  // Add Y axis
  var y = d3.scaleLinear().domain([0, 20]).range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  // Bars
  svg
    .selectAll("mybar")
    .data(formated_data)
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return x(d.priority);
    })
    .attr("y", function (d) {
      return y(d.count);
    })
    .attr("width", x.bandwidth())
    .attr("height", function (d) {
      return height - y(d.count);
    })
    .attr("fill", "#69b3a2");
};
