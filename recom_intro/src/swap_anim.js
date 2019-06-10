var staticswap = d3.select('#swapgrid-static').append('svg')
.attr({
  width: w/1.8,
  height: h/1.8
});



// loop over number of columns
for (var n = 0; n < squaresColumn; n++) {

  // create each set of rows
  var rows = staticswap.selectAll('rect' + ' .row-' + (n + 1))
  .data(d3.range(squaresRow))
  .enter().append('rect')
  .attr({
    class: function(d, i) {
      return 'square row-' + (n + 1) + ' ' + 'col-' + (i + 1);
    },
    id: function(d, i) {
      return 's-' + (n + 1) + (i + 1);
    },
    index: function(d,i){
      return i + 20*n;
    },
    width: square/2,
    height: square/2,
    x: function(d, i) {
      return i * (square/2+1) + 15;
    },
    y: n * (square/2+1) + 15 ,
    fill: function(d,i) {
      return colors[swap_plans[0][i+20*n]]
    },
      		//'#fff',
          opacity: .7,
          stroke: '#222',
          "stroke-width": 1,
          "stroke-opacity":1,    });

    // test with some feedback

  };

  var finalswap = d3.select('#swapgrid-final').append('svg')
  .attr({
    width: w/1.8,
    height: h/1.8
  });

// loop over number of columns
for (var n = 0; n < squaresColumn; n++) {

  // create each set of rows
  var rows = finalswap.selectAll('rect' + ' .row-' + (n + 1))
  .data(d3.range(squaresRow))
  .enter().append('rect')
  .attr({
    class: function(d, i) {
      return 'square row-' + (n + 1) + ' ' + 'col-' + (i + 1);
    },
    id: function(d, i) {
      return 's-' + (n + 1) + (i + 1);
    },
    index: function(d,i){
      return i + 20*n;
    },
    width: square/2,
    height: square/2,
    x: function(d, i) {
      return i * (square/2+1) + 15;
    },
    y: n * (square/2+1) + 15,
    fill: function(d,i) {
      return colors[swap_plans[swap_plans.length -1][i+20*n]]
    },
          //'#fff',
          opacity: .7,
          stroke: '#222',
          "stroke-width": 1,
          "stroke-opacity":1,    });

    // test with some feedback

  };




  var swapgrid = d3.select('#swapgrid-anim').append('svg')
  .attr({
    width: w,
    height: h
  });

// loop over number of columns
for (var n = 0; n < squaresColumn; n++) {

  // create each set of rows
  var rows = swapgrid.selectAll('rect' + ' .row-' + (n + 1))
  .data(d3.range(squaresRow))
  .enter().append('rect')
  .attr({
    class: function(d, i) {
      return 'square row-' + (n + 1) + ' ' + 'col-' + (i + 1);
    },
    id: function(d, i) {
      return 's-' + (n + 1) + (i + 1);
    },
    index: function(d,i){
      return i + 20*n;
    },
    width: square,
    height: square,
    x: function(d, i) {
      return i * (square+2);
    },
    y: n * (square+2),
    fill: function(d,i) {
      return colors[swap_plans[swap_plans.length - 1][i+20*n]]
    },
          //'#fff',
          opacity: .7,

          stroke: '#222',
          "stroke-width": 1,
          "stroke-opacity":1,
        });

    // test with some feedback

  };










  var swap_step = 0;
  function animate_swap(){
    if (swap_step == swap_plans.length) {swap_step = 0;}



    swapgrid.selectAll("rect").each(function(d) {
      var id = d3.select(this).attr("index");

      d3.select(this).style("fill", function() {
        return colors[swap_plans[swap_step][id]];

      });
    });
    document.getElementById("swapstepno").innerHTML = swap_step;

    swap_step ++;
  }




  var tick = setInterval(animate_swap, 300);
