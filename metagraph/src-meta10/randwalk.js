
cur_plan_str2 = '4455511445551144566114376661337766233772223377222';

var distfills = d3.scaleOrdinal(d3.schemeSet2);
var grdrw = d3.select('#randomwalk').append('svg')
  .attr("width", (square10*14))
  .attr("height",square10*14);
  
  




// loop over number of columns
_.times(square10sColumn, function(n) {

  // create each set of rows
  var rows = grdrw.selectAll('rect' + ' .row-' + (n + 1))
    .data(d3.range(square10sRow))
    .enter().append('rect')
    

    
    
    
    
    .attr("class", function(d, i) {return 'square10 row-' + (n + 1) + ' ' + 'col-' + (i + 1);})
    .attr("id", function(d, i) {
        return 's-' + (n + 1) + (i + 1);
    })
      .attr("width", square10sm)
      .attr("height",square10sm)
      .attr("x", function(d, i) {
        return (16+i * 1.04*square10sm);
      })
      .attr("y", (16 + n * 1.04*square10sm))
    
    .style("fill",function(d,i) { return distfills(cur_plan_str2[7*n + i]);})
    .style("stroke","#555")
    .style("stroke-width",1)

});



function grid_bordersrw(){


grdrw.selectAll("line").remove();



  grdrw.selectAll("rect").each(function(){
    var nm = d3.select(this).attr("id");
    var cr = d3.select(this);
    if (nm[2] == 1){
      grdrw.append("line")
      .attr("x1", parseFloat(cr.attr("x")-1))
      .attr("x2", square10+(parseFloat(cr.attr("x"))+1 + (nm[3] == 7 ? 0 : 1)))
      .attr("y1", parseFloat(cr.attr("y")))
      .attr("y2",parseFloat(cr.attr("y")))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else if (nm[2] == 7){
      grdrw.append("line")
      .attr("x1", parseFloat(cr.attr("x")-1))
      .attr("x2", square10+(parseFloat(cr.attr("x"))+1 + (nm[3] == 7 ? 0 : 1)))
      .attr("y1", square10+(parseFloat(cr.attr("y"))))
      .attr("y2",square10+(parseFloat(cr.attr("y"))))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else{

      var cellchar = cur_plan_str2[7*(nm[2]-1) + (nm[3]-1)]
      var checkcell_up = cur_plan_str2[7*(nm[2]-1) + (nm[3]-1)-7]
      var checkcell_dn = cur_plan_str2[7*(nm[2]-1) + (nm[3]-1)+7]


      if (cellchar != checkcell_up){
         grdrw.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", square10+(parseFloat(cr.attr("x"))+1 + (nm[3] == 7 ? 0 : 1)))
        .attr("y1", parseFloat(cr.attr("y")-1))
        .attr("y2",parseFloat(cr.attr("y")-1))
        .style("stroke-width", 2)
        .attr("stroke","#333");
      }
      if (cellchar != checkcell_dn && nm[2]==6){
        grdrw.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", square10+(parseFloat(cr.attr("x"))+1+ (nm[3] == 7 ? 0 : 1)))
        .attr("y1", square10+(parseFloat(cr.attr("y"))+1))
        .attr("y2",square10+(parseFloat(cr.attr("y")) +1))
        .style("stroke-width", 2)
        .attr("stroke","#333");
      }


    }



    if (nm[3] == 1){
      grdrw.append("line")
      .attr("x1", parseFloat(cr.attr("x")))
      .attr("x2", (parseFloat(cr.attr("x"))))
      .attr("y1", parseFloat(cr.attr("y")-1))
      .attr("y2",square10+(parseFloat(cr.attr("y"))+1 + (nm[2] == 7 ? 0 : 1)))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else if (nm[3] == 7){
      grdrw.append("line")
      .attr("x1", square10+(parseFloat(cr.attr("x"))))
      .attr("x2", square10+(parseFloat(cr.attr("x"))))
      .attr("y1", (parseFloat(cr.attr("y"))-1))
      .attr("y2",square10+(parseFloat(cr.attr("y"))+1+ (nm[2] == 7 ? 0 : 1)))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else {

      var cellchar = cur_plan_str2[7*(nm[2]-1) + (nm[3]-1)]
      var checkcell_lf = cur_plan_str2[7*(nm[2]-1) + (nm[3]-1)-1]
      var checkcell_rt = cur_plan_str2[7*(nm[2]-1) + (nm[3]-1)+1]

      if (cellchar != checkcell_lf){
        grdrw.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", parseFloat(cr.attr("x")-1))
        .attr("y1", parseFloat(cr.attr("y")-1))
        .attr("y2",square10+(parseFloat(cr.attr("y"))+1+ (nm[2] == 7 ? 0 : 1)))
        .style("stroke-width", 2)
        .attr("stroke","#333");        
      }
      if (cellchar != checkcell_rt && nm[3] == 6){

        grdrw.append("line")
        .attr("x1", square10+(parseFloat(cr.attr("x"))+1.7))
        .attr("x2", square10+(parseFloat(cr.attr("x"))+1.7))
        .attr("y1", (parseFloat(cr.attr("y"))-1))
        .attr("y2",square10+(parseFloat(cr.attr("y"))+1+ (nm[2] == 7 ? 0 : 1)))
        .style("stroke-width", 2)
        .attr("stroke","#333");

      }





    }




  });

  grdrw.selectAll("line").style("stroke","#000").style("stroke-width", 3);
}

function swap_cells2() {
    var val = false;
var string_copy =  (' ' + cur_plan_str2).slice(1);
    while (!val){
        string_copy = (' ' + cur_plan_str2).slice(1);
        var i1 = Math.floor(Math.random() * 49);
        var i2 = Math.floor(Math.random() * 49);
        var c1 = string_copy[i1];
        var c2 = string_copy[i2];
        if (c1 != c2){
            string_copy = setCharAt(string_copy, i1,c2);
            string_copy = setCharAt(string_copy, i2,c1);
            val = is_conn(string_copy);
        }
    }

return string_copy;





}



function update_distsrw(){

    grdrw.selectAll("rect").each(function(d){
        var nm = d3.select(this).attr("id");

        d3.select(this).style("fill",function() { return distfills(cur_plan_str2[7*parseInt(nm[2]-1) + parseInt(nm[3])-1]);})

    });

grid_bordersrw();
}


function runFunction(){
    cur_plan_str2 = swap_cells2();
    update_distsrw();
}



update_distsrw();

var tick =setInterval(runFunction,300);