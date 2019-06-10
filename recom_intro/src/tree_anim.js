var statictree = d3.select('#treegrid-static').append('svg')
.attr({
  width: w/1.8,
  height: h/1.8
});

// loop over number of columns
for (var n = 0; n < squaresColumn; n++) {

  // create each set of rows
  var rows = statictree.selectAll('rect' + ' .row-' + (n + 1))
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
      return colors[tree_plans[0][i+20*n]]
    },
          //'#fff',
          opacity: .7,
          stroke: '#222',
          "stroke-width": 1,
          "stroke-opacity":1,
        });

    // test with some feedback

  };

  var finaltree = d3.select('#treegrid-final').append('svg')
  .attr({
    width: w/1.8,
    height: h/1.8
  });

// loop over number of columns
for (var n = 0; n < squaresColumn; n++) {

  // create each set of rows
  var rows = finaltree.selectAll('rect' + ' .row-' + (n + 1))
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
      return colors[tree_plans[tree_plans.length -1][i+20*n]]
    },
          //'#fff',
          opacity: .7,
          stroke: '#222',
          "stroke-width": 1,
          "stroke-opacity":1,
        });

    // test with some feedback

  };




  var treegrid = d3.select('#treegrid-anim').append('svg')
  .attr({
    width: w,
    height: h
  });

// loop over number of columns
for (var n = 0; n < squaresColumn; n++) {

  // create each set of rows
  var rows = treegrid.selectAll('rect' + ' .row-' + (n + 1))
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
      return colors[tree_plans[0][i+20*n]]
    },
          //'#fff',
          opacity: .7,

          stroke: '#222',
          "stroke-width": 1,
          "stroke-opacity":1,
        });

    // test with some feedback

  };










  var tree_step = 0;
  function animate_tree(){
    if (tree_step == tree_plans.length) {tree_step = 0;}



    treegrid.selectAll("rect").each(function(d) {
      var id = d3.select(this).attr("index");

      d3.select(this).style("fill", function() {
        return colors[tree_plans[tree_step][id]];

      });
    });
    document.getElementById("treestepno").innerHTML = tree_step;

    tree_step ++;
  }




  var tick = setInterval(animate_tree, 300);
