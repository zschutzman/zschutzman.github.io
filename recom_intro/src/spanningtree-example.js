var graphex = d3.select('#graph_ex').append('svg')
.attr({
  width: w,
  height: h/2.5
});

// loop over number of columns
for (var n = 0; n < squaresColumn; n++) {

  // create each set of rows
  var rows = graphex.selectAll('circ' + ' .row-' + (n + 1))
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

      },      opacity: function(d,i){
       return swap_plans[Math.round(swap_plans.length/2)][i+20*n] == 0 ? 1:0
     },

     strokeopacity:0,
   });

    // test with some feedback

  };


  var graphex_st = d3.select('#graph_ex-st').append('svg')
  .attr({
    width: w,
    height: h/2.5
  });

// loop over number of columns
for (var n = 0; n < squaresColumn; n++) {

  // create each set of rows
  var rows = graphex_st.selectAll('circ' + ' .row-' + (n + 1))
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
      opacity: function(d,i){
       return swap_plans[Math.round(swap_plans.length/2)][i+20*n] == 0 ? 1:0
     },
          //'#fff',
          strokeopacity:0,

        });

    // test with some feedback

  };


  function add_links(){



    graphex.selectAll("circle").each(function(d) {

      var my_stuff = d3.select(this).attr("gridid").split(",");

      graphex.selectAll("circle").each(function(e) {
        var your_stuff = d3.select(this).attr("gridid").split(",");


        if (my_stuff[2] == your_stuff[2] && my_stuff[2]==0){

          if (parseInt(my_stuff[0]) == (parseInt(your_stuff[0]) + 1) && my_stuff[1] == your_stuff[1]) {
            graphex.append("line").attr("x1",parseInt(my_stuff[3])).attr("y1", parseInt(my_stuff[4])-square/3).attr("x2", parseInt(your_stuff[3])).attr("y2", parseInt(your_stuff[4])+square/3).attr("stroke","black")
          }
          if (parseInt(my_stuff[1]) == (parseInt(your_stuff[1]) + 1) && my_stuff[0] == your_stuff[0]) {
            graphex.append("line").attr("x1",parseInt(my_stuff[3])-square/3).attr("y1", parseInt(my_stuff[4])).attr("x2", parseInt(your_stuff[3])+square/3).attr("y2", parseInt(your_stuff[4])).attr("stroke","black")
          }
        }

      })

    })






    graphex_st.selectAll("circle").each(function(d) {

      var my_stuff = d3.select(this).attr("gridid").split(",");
      my_stuff[0] = parseInt(my_stuff[0])
      my_stuff[1] = parseInt(my_stuff[1])

      graphex_st.selectAll("circle").each(function(e) {
        var your_stuff = d3.select(this).attr("gridid").split(",");



        if (my_stuff[2] == your_stuff[2] && my_stuff[2]==0 ){
          if (parseInt(my_stuff[0]) == (parseInt(your_stuff[0]) + 1) && my_stuff[1] == your_stuff[1]) {
            graphex_st.append("line").attr("x1",parseInt(my_stuff[3])).attr("y1", parseInt(my_stuff[4])-square/3).attr("x2", parseInt(your_stuff[3])).attr("y2", parseInt(your_stuff[4])+square/3).attr("stroke","black");

          }
          if (parseInt(my_stuff[1]) == (parseInt(your_stuff[1]) + 1) && my_stuff[0] == your_stuff[0]  && 
            (my_stuff[0] == 0   
              || (my_stuff[0] == 4  && my_stuff[1] >=17)
              || (my_stuff[0] == 4  && my_stuff[1]<=2)     
              || (my_stuff[0] == 5  &&my_stuff[1]>=5  && my_stuff[1]<=11) 
              )) {
            graphex_st.append("line").attr("x1",parseInt(my_stuff[3])-square/3).attr("y1", parseInt(my_stuff[4])).attr("x2", parseInt(your_stuff[3])+square/3).attr("y2", parseInt(your_stuff[4])).attr("stroke","black")
        }

      }



    })

    })



  }

  add_links()



