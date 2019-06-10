var dualgraph = d3.select('#dualgraph').append('svg')
  .attr({
    width: w,
    height: h
  });

// loop over number of columns
for (var n = 0; n < squaresColumn; n++) {

  // create each set of rows
  var rows = dualgraph.selectAll('circ' + ' .row-' + (n + 1))
    .data(d3.range(squaresRow))
    .enter().append('circle')
    .attr({
      class: function(d, i) {
        return 'circle row-' + (n + 1) + ' ' + 'col-' + (i + 1);
      },
      id: function(d, i) {
        return 's-' + (n + 1) + (i + 1);
      },


      gridid: function(d,i){
        return [n,i,swap_plans[Math.round(swap_plans.length/2)][i+20*n], (parseInt(i * (square)) + 8), parseInt(n * square) + 8]
      },

      r: square/3,
      cx: function(d, i) {
        return i * (square) + 8},
      
      cy: n * square + 8,
      fill: "#888",

      strokeopacity:0,
    });

    // test with some feedback

};


var dualgraphdistricts = d3.select('#dualgraph-d').append('svg')
  .attr({
    width: w,
    height: h
  });

// loop over number of columns
for (var n = 0; n < squaresColumn; n++) {

  // create each set of rows
  var rows = dualgraphdistricts.selectAll('circ' + ' .row-' + (n + 1))
    .data(d3.range(squaresRow))
    .enter().append('circle')
    .attr({
      class: function(d, i) {
        return 'circle row-' + (n + 1) + ' ' + 'col-' + (i + 1);
      },
      id: function(d, i) {
        return 's-' + (n + 1) + (i + 1);
      },


      gridid: function(d,i){
        return [n,i,swap_plans[Math.round(swap_plans.length/2)][i+20*n], (parseInt(i * (square)) + 8), parseInt(n * square) + 8]
      },

      r: square/3,
      cx: function(d, i) {
        return i * (square) + 8},
      
      cy: n * square + 8,
      fill: function(d,i) {
                return colors[swap_plans[Math.round(swap_plans.length/2)][i+20*n]]

        },
          //'#fff',
      strokeopacity:0,

    });

    // test with some feedback

};


function add_links(){



dualgraph.selectAll("circle").each(function(d) {

  var my_stuff = d3.select(this).attr("gridid").split(",");

    dualgraph.selectAll("circle").each(function(e) {
    var your_stuff = d3.select(this).attr("gridid").split(",");




    if (parseInt(my_stuff[0]) == (parseInt(your_stuff[0]) + 1) && my_stuff[1] == your_stuff[1]) {
      dualgraph.append("line").attr("x1",parseInt(my_stuff[3])).attr("y1", parseInt(my_stuff[4])-square/3).attr("x2", parseInt(your_stuff[3])).attr("y2", parseInt(your_stuff[4])+square/3).attr("stroke","black")
    }
    if (parseInt(my_stuff[1]) == (parseInt(your_stuff[1]) + 1) && my_stuff[0] == your_stuff[0]) {
      dualgraph.append("line").attr("x1",parseInt(my_stuff[3])-square/3).attr("y1", parseInt(my_stuff[4])).attr("x2", parseInt(your_stuff[3])+square/3).attr("y2", parseInt(your_stuff[4])).attr("stroke","black")
    }


  })

  })
dualgraphdistricts.selectAll("circle").each(function(d) {

  var my_stuff = d3.select(this).attr("gridid").split(",");

    dualgraphdistricts.selectAll("circle").each(function(e) {
    var your_stuff = d3.select(this).attr("gridid").split(",");



if (my_stuff[2] == your_stuff[2]){
    if (parseInt(my_stuff[0]) == (parseInt(your_stuff[0]) + 1) && my_stuff[1] == your_stuff[1]) {
      dualgraphdistricts.append("line").attr("x1",parseInt(my_stuff[3])).attr("y1", parseInt(my_stuff[4])-square/3).attr("x2", parseInt(your_stuff[3])).attr("y2", parseInt(your_stuff[4])+square/3).attr("stroke","black")
    }
    if (parseInt(my_stuff[1]) == (parseInt(your_stuff[1]) + 1) && my_stuff[0] == your_stuff[0]) {
      dualgraphdistricts.append("line").attr("x1",parseInt(my_stuff[3])-square/3).attr("y1", parseInt(my_stuff[4])).attr("x2", parseInt(your_stuff[3])+square/3).attr("y2", parseInt(your_stuff[4])).attr("stroke","black")
    }

}



  })

  })



}

add_links()



