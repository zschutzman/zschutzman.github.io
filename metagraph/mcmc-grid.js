
var distfills = d3.scaleOrdinal(d3.schemeCategory10);

var square7 = 40;
var square7sm = square7/1.25;
square7 = square7sm;
var square7sRow = 7;
var square7sColumn = 7;

cur_plan_str = '1111111222222233333334444444555555566666667777777'

cell_cols = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var r_win_i = [0,0,0,0,0,0];
var b_win_i = [0,0,0,0,0,0];
var n_win_i = [0,0,0,0,0,0];
var rwin = 0;
var bwin=0;


var elecfill = ['#0000ff','#5934df','#7250c0','#7d69a0','#808080','#aa7264','#ca6048','#e6462a','#ff0000'];

elecfill[0] = '#fdb863';
elecfill[4] = '#909090';
elecfill[8] = '#b2abd2';


var simp_fill = [elecfill[0],elecfill[4],elecfill[8]];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


party_init = [1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1];
party_init = shuffle(party_init);

var parties = [-1,1];








var grd = d3.select('#gridspace').append('svg')
  .attr("width", (square7*9))
  .attr("height",150+square7*8).attr("transform","translate(80,-80)");
  
  
var chk = "";
var dist1 = 0;
var dist2 = 0;
var dist3 = 0;
var dist4 = 0;
var dist5 = 0;
var cnt = 0;  

var ptmp = 0;
var pinit = [];

// loop over number of columns
_.times(square7sColumn, function(n) {

  // create each set of rows
  var rows = grd.selectAll('rect' + ' .row-' + (n + 1))
    .data(d3.range(square7sRow))
    .enter().append('rect')
    

    
    
    
    
    .attr("class", function(d, i) {return 'square7 row-' + (n + 1) + ' ' + 'col-' + (i + 1);})
    .attr("id", function(d, i) {
        return 's-' + (n + 1) + (i + 1);
    })
      .attr("width", square7)
      .attr("height",square7)
      .attr("x", function(d, i) {
        return (30+i * 1.04*square7);
      })
      .attr("y", (square7 + n * 1.04*square7))
    
    .attr("party",function(d,i) {return party_init[4*n+i];})
    .style("fill",function(d) { return simp_fill[1+parseInt(d3.select(this).attr("party"))];})
    .style("stroke","#555")
    .style("stroke-width",1)
    
    
    
    .on("mouseover",function(d){
        d3.select(this).style("stroke","#000");
        d3.select(this).style("stroke-width","3");
    })
    
    .on("mouseout", function(d){
        d3.select(this).style("stroke","#555");
        d3.select(this).style("stroke-width","1")
    })
    
    .on("click", function(d){
     clsq = true;
     do_update2(this);

     //update_textboxes();
    }
    );


});


var grd2 = d3.select('#gridspace').append('svg')
  .attr("width", (square7*9))
  .attr("height",150+square7*8).attr("transform","translate(80,-80)");
  
  




// loop over number of columns
_.times(square7sColumn, function(n) {

  // create each set of rows
  var rows = grd2.selectAll('rect' + ' .row-' + (n + 1))
    .data(d3.range(square7sRow))
    .enter().append('rect')
    

    
    
    
    
    .attr("class", function(d, i) {return 'square7 row-' + (n + 1) + ' ' + 'col-' + (i + 1);})
    .attr("id", function(d, i) {
        return 's-' + (n + 1) + (i + 1);
    })
      .attr("width", square7sm)
      .attr("height",square7sm)
      .attr("x", function(d, i) {
        return (30+i * 1.04*square7sm);
      })
      .attr("y", (square7sm + n * 1.04*square7sm))
    
    .style("fill",function(d,i) { return distfills(cur_plan_str[7*n + i]);})
    .style("stroke","#555")
    .style("stroke-width",1)

});

grd2.append("circle")
    .attr("x",30)
    .attr("y",3)
    .attr("r",30)

    .style("fill","#aac")
    .style("stroke","black")
    .style("stroke-width",3)
    .on("click", function(d) {
    	var samples = [];
    	var histo = [0,0,0,0,0,0,0,0];

    	while (samples.length < 1000){
    		cur_plan_str = swap_cells();

    		var already = false;
    		for (var i=0; i<samples.length; i++){
    			if (samples[i] == cur_plan_str){ already = true;}
    		}
    		if (!already){

    			temph = [0,0,0,0,0,0,0];
    			var c = 0;
    			for (var i=0; i<49; i++){
    				temph[parseInt(cur_plan_str[i])-1] += parseInt(cell_cols[i]);
    			}
    			for (var i=0; i<7; i++){
    				if (temph[i] > 0) {c+=1;}
    			}
    			histo[c] +=1;

    			samples.push((' ' + cur_plan_str).slice(1));



    		}
    	}

    		console.log(histo);
    		update_dists();

        
        
    });




function grid_borders(){


grd.selectAll("line").remove();



  grd.selectAll("rect").each(function(){
    var nm = d3.select(this).attr("id");
    var cr = d3.select(this);
    if (nm[2] == 1){
      grd.append("line")
      .attr("x1", parseFloat(cr.attr("x")-1))
      .attr("x2", square7+(parseFloat(cr.attr("x"))+1 + (nm[3] == 7 ? 0 : 1)))
      .attr("y1", parseFloat(cr.attr("y")))
      .attr("y2",parseFloat(cr.attr("y")))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else if (nm[2] == 7){
      grd.append("line")
      .attr("x1", parseFloat(cr.attr("x")-1))
      .attr("x2", square7+(parseFloat(cr.attr("x"))+1 + (nm[3] == 7 ? 0 : 1)))
      .attr("y1", square7+(parseFloat(cr.attr("y"))))
      .attr("y2",square7+(parseFloat(cr.attr("y"))))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else{

      var cellchar = cur_plan_str[7*(nm[2]-1) + (nm[3]-1)]
      var checkcell_up = cur_plan_str[7*(nm[2]-1) + (nm[3]-1)-7]
      var checkcell_dn = cur_plan_str[7*(nm[2]-1) + (nm[3]-1)+7]


      if (cellchar != checkcell_up){
         grd.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", square7+(parseFloat(cr.attr("x"))+1 + (nm[3] == 7 ? 0 : 1)))
        .attr("y1", parseFloat(cr.attr("y")-1))
        .attr("y2",parseFloat(cr.attr("y")-1))
        .style("stroke-width", 2)
        .attr("stroke","#333");
      }
      if (cellchar != checkcell_dn && nm[2]==6){
        grd.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", square7+(parseFloat(cr.attr("x"))+1+ (nm[3] == 7 ? 0 : 1)))
        .attr("y1", square7+(parseFloat(cr.attr("y"))+1))
        .attr("y2",square7+(parseFloat(cr.attr("y")) +1))
        .style("stroke-width", 2)
        .attr("stroke","#333");
      }


    }



    if (nm[3] == 1){
      grd.append("line")
      .attr("x1", parseFloat(cr.attr("x")))
      .attr("x2", (parseFloat(cr.attr("x"))))
      .attr("y1", parseFloat(cr.attr("y")-1))
      .attr("y2",square7+(parseFloat(cr.attr("y"))+1 + (nm[2] == 7 ? 0 : 1)))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else if (nm[3] == 7){
      grd.append("line")
      .attr("x1", square7+(parseFloat(cr.attr("x"))))
      .attr("x2", square7+(parseFloat(cr.attr("x"))))
      .attr("y1", (parseFloat(cr.attr("y"))-1))
      .attr("y2",square7+(parseFloat(cr.attr("y"))+1+ (nm[2] == 7 ? 0 : 1)))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else {

      var cellchar = cur_plan_str[7*(nm[2]-1) + (nm[3]-1)]
      var checkcell_lf = cur_plan_str[7*(nm[2]-1) + (nm[3]-1)-1]
      var checkcell_rt = cur_plan_str[7*(nm[2]-1) + (nm[3]-1)+1]

      if (cellchar != checkcell_lf){
        grd.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", parseFloat(cr.attr("x")-1))
        .attr("y1", parseFloat(cr.attr("y")-1))
        .attr("y2",square7+(parseFloat(cr.attr("y"))+1+ (nm[2] == 7 ? 0 : 1)))
        .style("stroke-width", 2)
        .attr("stroke","#333");        
      }
      if (cellchar != checkcell_rt && nm[3] == 6){

        grd.append("line")
        .attr("x1", square7+(parseFloat(cr.attr("x"))+1.7))
        .attr("x2", square7+(parseFloat(cr.attr("x"))+1.7))
        .attr("y1", (parseFloat(cr.attr("y"))-1))
        .attr("y2",square7+(parseFloat(cr.attr("y"))+1+ (nm[2] == 7 ? 0 : 1)))
        .style("stroke-width", 2)
        .attr("stroke","#333");

      }





    }




  });


grd2.selectAll("line").remove();


  grd2.selectAll("rect").each(function(){
    var nm = d3.select(this).attr("id");
    var cr = d3.select(this);
    if (nm[2] == 1){
      grd2.append("line")
      .attr("x1", parseFloat(cr.attr("x")-1))
      .attr("x2", square7sm+(parseFloat(cr.attr("x"))+1 + (nm[3] == 7 ? 0 : 1)))
      .attr("y1", parseFloat(cr.attr("y")))
      .attr("y2",parseFloat(cr.attr("y")))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else if (nm[2] == 7){
      grd2.append("line")
      .attr("x1", parseFloat(cr.attr("x")-1))
      .attr("x2", square7sm+(parseFloat(cr.attr("x"))+1 + (nm[3] == 7 ? 0 : 1)))
      .attr("y1", square7sm+(parseFloat(cr.attr("y"))))
      .attr("y2",square7sm+(parseFloat(cr.attr("y"))))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else{

      var cellchar = cur_plan_str[7*(nm[2]-1) + (nm[3]-1)]
      var checkcell_up = cur_plan_str[7*(nm[2]-1) + (nm[3]-1)-7]
      var checkcell_dn = cur_plan_str[7*(nm[2]-1) + (nm[3]-1)+7]


      if (cellchar != checkcell_up){
         grd2.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", square7sm+(parseFloat(cr.attr("x"))+1 + (nm[3] == 7 ? 0 : 1)))
        .attr("y1", parseFloat(cr.attr("y")-1))
        .attr("y2",parseFloat(cr.attr("y")-1))
        .style("stroke-width", 2)
        .attr("stroke","#333");
      }
      if (cellchar != checkcell_dn && nm[2]==6){
        grd2.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", square7sm+(parseFloat(cr.attr("x"))+1+ (nm[3] == 7 ? 0 : 1)))
        .attr("y1", square7sm+(parseFloat(cr.attr("y"))+1))
        .attr("y2",square7sm+(parseFloat(cr.attr("y")) +1))
        .style("stroke-width", 2)
        .attr("stroke","#333");
      }


    }



    if (nm[3] == 1){
      grd2.append("line")
      .attr("x1", parseFloat(cr.attr("x")))
      .attr("x2", (parseFloat(cr.attr("x"))))
      .attr("y1", parseFloat(cr.attr("y")-1))
      .attr("y2",square7sm+(parseFloat(cr.attr("y"))+1 + (nm[2] == 7 ? 0 : 1)))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else if (nm[3] == 7){
      grd2.append("line")
      .attr("x1", square7sm+(parseFloat(cr.attr("x"))))
      .attr("x2", square7sm+(parseFloat(cr.attr("x"))))
      .attr("y1", (parseFloat(cr.attr("y"))-1))
      .attr("y2",square7sm+(parseFloat(cr.attr("y"))+1+ (nm[2] == 7 ? 0 : 1)))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else {

      var cellchar = cur_plan_str[7*(nm[2]-1) + (nm[3]-1)]
      var checkcell_lf = cur_plan_str[7*(nm[2]-1) + (nm[3]-1)-1]
      var checkcell_rt = cur_plan_str[7*(nm[2]-1) + (nm[3]-1)+1]

      if (cellchar != checkcell_lf){
        grd2.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", parseFloat(cr.attr("x")-1))
        .attr("y1", parseFloat(cr.attr("y")-1))
        .attr("y2",square7sm+(parseFloat(cr.attr("y"))+1+ (nm[2] == 7 ? 0 : 1)))
        .style("stroke-width", 2)
        .attr("stroke","#333");        
      }
      if (cellchar != checkcell_rt && nm[3] == 6){

        grd2.append("line")
        .attr("x1", square7sm+(parseFloat(cr.attr("x"))+1.7))
        .attr("x2", square7sm+(parseFloat(cr.attr("x"))+1.7))
        .attr("y1", (parseFloat(cr.attr("y"))-1))
        .attr("y2",square7sm+(parseFloat(cr.attr("y"))+1+ (nm[2] == 7 ? 0 : 1)))
        .style("stroke-width", 2)
        .attr("stroke","#333");

      }





    }




  });




}








function do_update2(r){
        if (d3.event != null && r != -1){
            var t = parseInt(d3.select(r).attr("party"));
        grd.selectAll('rect').each(function(d){
            if (d3.select(this).attr("id") == d3.select(r).attr("id")){
              d3.select(this).attr("party",t+2)
              if (d3.select(this).attr("party") == 3){d3.select(this).attr("party",-1);}
            }
        });
    }



  

    grd.selectAll('rect').each(function(d){
    	var idnum = 7*(parseInt(d3.select(this).attr("id")[2])-1) + parseInt(d3.select(this).attr("id")[3])-1
        if (d3.select(this).attr("party") == 0) {d3.select(this).style("fill", simp_fill[1]);  cell_cols[idnum] = 0;}
        if (d3.select(this).attr("party") == 1) {d3.select(this).style("fill", simp_fill[2]); cell_cols[idnum] = 1;}
        if (d3.select(this).attr("party") == -1) {d3.select(this).style("fill", simp_fill[0]); cell_cols[idnum] = -1;}

    });


        r_win_i = [0,0,0,0,0,0];
        b_win_i = [0,0,0,0,0,0];
        n_win_i = [0,0,0,0,0,0];

        //compute_hists();



  
}


function update_dists(){

	grd2.selectAll("rect").each(function(d){
		var nm = d3.select(this).attr("id");

		d3.select(this).style("fill",function() { return distfills(cur_plan_str[7*parseInt(nm[2]-1) + parseInt(nm[3])-1]);})

	});

grid_borders();
}


function is_conn(s){


	for (var d=1; d<=7; d++){
		var seen = [];
		var to_check = [];
		var first = -1;
		var currnode;
		var cand;
		for (var i=0; i<s.length; i++){
			if (s[i] == d && first == -1){
				first = i;
			}
		}
		
		to_check.push(first);

		while (to_check.length > 0){
			currnode = parseInt(to_check.pop());
			var already = false;
			for (var a=0; a<seen.length; a++){
				if (seen[a] == currnode){already = true;}
			}
			if (!already){
			seen.push(currnode);
			if (s[currnode+1] == d && currnode%7!=6){ to_check.push(currnode+1);}
			if (s[currnode-1] == d && currnode%7!=0){ to_check.push(currnode-1);}
			if (s[currnode+7] == d){ to_check.push(currnode+7);}
			if (s[currnode-7] == d){ to_check.push(currnode-7);}
		}









		}
		if (!(seen.length == 7)){return false;}







	}

return true;




}



function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function swap_cells() {

	var val = false;
var string_copy =  (' ' + cur_plan_str).slice(1);
	while (!val){
		string_copy = (' ' + cur_plan_str).slice(1);
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


grid_borders();
do_update2(-1);