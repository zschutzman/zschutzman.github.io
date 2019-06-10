var staticgrid = d3.select('#grid').append('svg')
.attr({
  width: w,
  height: h
});

// loop over number of columns
for (var n = 0; n < squaresColumn; n++) {

  // create each set of rows
  var rows = staticgrid.selectAll('rect' + ' .row-' + (n + 1))
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
    y: n * (square + 2),
    fill: function(d,i) {
      return colors[swap_plans[0][i+20*n]]

    },
    opacity: .7,
      		//'#fff',
          stroke: '#222',
          "stroke-width": 1,
          "stroke-opacity":1,
        });

    // test with some feedback

  };