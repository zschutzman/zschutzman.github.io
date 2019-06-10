var fs = require("fs");
var text = fs.readFileSync("./swap_plans.txt");
var textByLine = text.split("\n")





var square = 20,
  w = 450,
  h = 450;

// create the svg
var svg = d3.select('#grid').append('svg')
  .attr({
    width: w,
    height: h
  });

// calculate number of rows and columns
var squaresRow = 20;
var squaresColumn = 20;

// loop over number of columns
for (var n = 0; n < squaresColumn; n++) {

  // create each set of rows
  var rows = svg.selectAll('rect' + ' .row-' + (n + 1))
    .data(d3.range(squaresRow))
    .enter().append('rect')
    .attr({
      class: function(d, i) {
        return 'square row-' + (n + 1) + ' ' + 'col-' + (i + 1);
      },
      id: function(d, i) {
        return 's-' + (n + 1) + (i + 1);
      },
      width: square,
      height: square,
      x: function(d, i) {
        return i * (square+2);
      },
      y: n * square,
      fill: function(d,i) {
return colors[swap_plans[swap_plans.length - 1][i+20*n]]
      	},
      		//'#fff',
      stroke: '#888888'
    });

    // test with some feedback

};