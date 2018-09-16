
var distfills = d3.scaleOrdinal(d3.schemeSet2);

var square10 = 40;
var square10sm = square10/1.25;
square10 = square10sm;
var square10sRow = 10;
var square10sColumn = 10;
var degreeweight = true;
red_this = 0;
var cur_plan_str = '0000000000111111111122222222223333333333444444444455555555556666666666777777777788888888889999999999';
var num_chain = 1000;
cell_cols = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var r_win_i = [0,0,0,0,0,0];
var b_win_i = [0,0,0,0,0,0];
var n_win_i = [0,0,0,0,0,0];
var rwin = 0;
var bwin=0;

var can_chain = true;

var elecfill = ['#0000ff','#5934df','#7250c0','#7d69a0','#808080','#aa7264','#ca6048','#e6462a','#ff0000'];

elecfill[0] = '#fca336';
elecfill[4] = '#909090';
elecfill[8] = '#857ab8';


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
  .attr("width", (square10*15))
  .attr("height",square10*15);
  


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
_.times(square10sColumn, function(n) {

  // create each set of rows
  var rows = grd.selectAll('rect' + ' .row-' + (n))
    .data(d3.range(square10sRow))
    .enter().append('rect')
    

    
    
    
    
    .attr("class", function(d, i) {return 'square10 row-' + (n) + ' ' + 'col-' + (i);})
    .attr("id", function(d, i) {
        return 's-' + (n) + (i);
    })
      .attr("width", square10)
      .attr("height",square10)
      .attr("x", function(d, i) {
        return (30+i * 1.04*square10);
      })
      .attr("y", (square10 + n * 1.04*square10))
    
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
  .attr("width", (square10*15))
  .attr("height",square10*15)
  




// loop over number of columns
_.times(square10sColumn, function(n) {

  // create each set of rows
  var rows = grd2.selectAll('rect' + ' .row-' + (n))
    .data(d3.range(square10sRow))
    .enter().append('rect')
    

    
    
    
    
    .attr("class", function(d, i) {return 'square10 row-' + (n) + ' ' + 'col-' + (i);})
    .attr("id", function(d, i) {
        return 's-' + (n) + (i);
    })
      .attr("width", square10sm)
      .attr("height",square10sm)
      .attr("x", function(d, i) {
        return (30+i * 1.04*square10sm);
      })
      .attr("y", (square10sm + n * 1.04*square10sm))
    .attr("district", function(d,i){return (cur_plan_str[10*n + i]);})
    .style("fill",function(d,i) { return distfills(cur_plan_str[10*n + i]);})
    .style("stroke","#555")
    .style("stroke-width",1)

    .on("click", function(d){
      var cd = parseInt(d3.select(this).attr("district"));
      var ix = d3.select(this).attr("id").slice(2,4);
      ix = (parseInt(ix[0]))*10 + (parseInt(ix[1]));
      console.log(ix);
      if (cd==9){ cur_plan_str = setCharAt(cur_plan_str,ix,0)}
        else {cur_plan_str = setCharAt(cur_plan_str,ix,(cd+1));}
      can_chain = is_conn(cur_plan_str);

      if (can_chain){   go_txt.text("Click to sample with MCMC");
                        go_btn.style("fill","green")
                   }
        else {
          go_txt.text("Current plan is invalid");
                  go_btn.style("fill","red")




        }




      update_dists();
      d3.select(this).attr("district", function(e){return cd==9 ? 0 : cd+1;})

    })
    .on("contextmenu", function(d){

        d3.event.preventDefault();

      var cd = parseInt(d3.select(this).attr("district"));
      var ix = d3.select(this).attr("id").slice(2,4);
      ix = (parseInt(ix[0]))*10 + (parseInt(ix[1]));
      if (cd==0){ cur_plan_str = setCharAt(cur_plan_str,ix,9)}
        else {cur_plan_str = setCharAt(cur_plan_str,ix,(cd-1));}
      can_chain = is_conn(cur_plan_str);
      update_dists();
      d3.select(this).attr("district", function(e){return cd==0 ? 9 : cd-1;})
      

      if (can_chain){   go_txt.text("Click to sample with MCMC");
                        go_btn.style("fill","green")
                   }
        else {
          go_txt.text("Current plan is invalid");
                  go_btn.style("fill","red")




        }






    })
    .on("mouseover",function(d){
        d3.select(this).style("stroke","#000");
        d3.select(this).style("stroke-width","3");
    })
    
    .on("mouseout", function(d){
        d3.select(this).style("stroke","#555");
        d3.select(this).style("stroke-width","1")
    });

});

var go_button_g = grd2.append("svg").attr("height",18*square10);
   



var rand_txt = go_button_g.append("text")
   .attr('dy','0.35em')
   .attr("width",150)
   .attr("x", 146)
   .attr("y", 266)
   .attr("transform","translate(0,15)")
   .attr("text-anchor","middle")
   .style("font-size","12px")
   .text("Random Plan")



var rand_btn = go_button_g.append("rect")
.attr("button",true)
    .attr("width",100)
    .attr("height",30)
    .attr("x",96)
    .attr("y",266)
    .attr("rx",8)
    .attr("ry",8)

    .style("fill","black")
    .style("fill-opacity",.5)
    .on("click", function(d) {
      if (!is_conn(cur_plan_str)){
      cur_plan_str = '0000011111000001111122222333332222233333444445555544444555556666677777666667777788888999998888899999'
    }

      var counter = 0;
      while (counter < 200){
        counter +=1;
        cur_plan_str = swap_cells(cur_plan_str);

      }

        update_dists();



      can_chain = is_conn(cur_plan_str);

      if (can_chain){   go_txt.text("Click to sample with MCMC");
                        go_btn.style("fill","green")
                   }
        else {
          go_txt.text("Current plan is invalid");
                  go_btn.style("fill","red")




        }

    });



var go_txt = go_button_g.append("text")
   .attr('dy','0.35em')
   .attr("width",200)
   .attr("x", 145)
   .attr("transform","translate(0,15)")
   .attr("text-anchor","middle")
   .style("font-size","12px")
   .text("CLICK TO GO")


var go_btn = go_button_g.append("rect")
.attr("button",true)
    .attr("width",180)
    .attr("height",30)
    .attr("x",55)
    .attr("rx",8)
    .attr("ry",8)

    .style("fill","black")
    .style("fill-opacity",.5)
    .on("click", function(d) {
      if (!can_chain){return;}
      var oldsv = (' ' + cur_plan_str).slice(1);
      var samples = [];
      var countlist = [];
      var histo = [0,0,0,0,0,0,0,0,0,0,0];
      

          temph = [0,0,0,0,0,0,0,0,0,0,0];
          var c = 0;
          for (var i=0; i<100; i++){
            temph[parseInt(cur_plan_str[i])-1] += parseInt(cell_cols[i]);
          }
          for (var i=0; i<10; i++){
            if (temph[i] > 0) {c+=1;}
          }
      red_this = c;



      
      while (samples.length < num_chain){
        cur_plan_str = swap_cells(cur_plan_str);

        var already = false;
        for (var i=0; i<samples.length; i++){
          if (samples[i] == cur_plan_str){ already = true;}
        }
        if (!already){

          temph = [0,0,0,0,0,0,0,0,0,0,0];
          var c = 0;
          for (var i=0; i<100; i++){
            temph[parseInt(cur_plan_str[i])-1] += parseInt(cell_cols[i]);
          }
          for (var i=0; i<10; i++){
            if (temph[i] > 0) {c+=1;}
            if (temph[i] == 0) {c+=.5;}
          }
          histo[Math.floor(c)] +=.5;
          histo[Math.ceil(c)] +=.5;

          samples.push((' ' + cur_plan_str).slice(1));
          countlist.push(count_valid_moves((' ' + cur_plan_str).slice(1)));


        }
      }

        cur_plan_str = (' ' + oldsv).slice(1);
        update_dists();
        update_histo(histo);
        console.log("MAX DEGREE: ", Math.max(...countlist));

    });




function grid_borders(){


 grd.selectAll("line").remove();



  grd.selectAll("rect").each(function(){
    if (d3.select(this).attr("button") == null){
    var nm = d3.select(this).attr("id");
    var cr = d3.select(this);
    if (nm[2] == 0){
      grd.append("line")
      .attr("x1", parseFloat(cr.attr("x")-1))
      .attr("x2", square10+(parseFloat(cr.attr("x"))+1 + (nm[3] == 9 ? 0 : 1)))
      .attr("y1", parseFloat(cr.attr("y")))
      .attr("y2",parseFloat(cr.attr("y")))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else if (nm[2] == 9){
      grd.append("line")
      .attr("x1", parseFloat(cr.attr("x")-1))
      .attr("x2", square10+(parseFloat(cr.attr("x"))+1 + (nm[3] == 9 ? 0 : 1)))
      .attr("y1", square10+(parseFloat(cr.attr("y"))))
      .attr("y2",square10+(parseFloat(cr.attr("y"))))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else{

      var cellchar = cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])]
      var checkcell_up = cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])-10]
      var checkcell_dn = cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])+10]


      if (cellchar != checkcell_up){
         grd.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", square10+(parseFloat(cr.attr("x"))+1 + (nm[3] == 9 ? 0 : 1)))
        .attr("y1", parseFloat(cr.attr("y")-1))
        .attr("y2",parseFloat(cr.attr("y")-1))
        .style("stroke-width", 2)
        .attr("stroke","#333");
      }
      if (cellchar != checkcell_dn && nm[2]==9){
        grd.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", square10+(parseFloat(cr.attr("x"))+1+ (nm[3] == 9 ? 0 : 1)))
        .attr("y1", square10+(parseFloat(cr.attr("y"))+1))
        .attr("y2",square10+(parseFloat(cr.attr("y")) +1))
        .style("stroke-width", 2)
        .attr("stroke","#333");
      }


    }



    if (nm[3] == 0){
      grd.append("line")
      .attr("x1", parseFloat(cr.attr("x")))
      .attr("x2", (parseFloat(cr.attr("x"))))
      .attr("y1", parseFloat(cr.attr("y")-1))
      .attr("y2",square10+(parseFloat(cr.attr("y"))+1 + (nm[2] == 9 ? 0 : 1)))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else if (nm[3] == 9){
      grd.append("line")
      .attr("x1", square10+(parseFloat(cr.attr("x"))))
      .attr("x2", square10+(parseFloat(cr.attr("x"))))
      .attr("y1", (parseFloat(cr.attr("y"))-1))
      .attr("y2",square10+(parseFloat(cr.attr("y"))+1+ (nm[2] == 9 ? 0 : 1)))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else {

      var cellchar = cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])]
      var checkcell_lf = cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])-1]
      var checkcell_rt = cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])+1]

      if (cellchar != checkcell_lf){
        grd.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", parseFloat(cr.attr("x")-1))
        .attr("y1", parseFloat(cr.attr("y")-1))
        .attr("y2",square10+(parseFloat(cr.attr("y"))+1+ (nm[2] == 9 ? 0 : 1)))
        .style("stroke-width", 2)
        .attr("stroke","#333");        
      }
      if (cellchar != checkcell_rt && nm[3] == 9){

        grd.append("line")
        .attr("x1", square10+(parseFloat(cr.attr("x"))+1.7))
        .attr("x2", square10+(parseFloat(cr.attr("x"))+1.7))
        .attr("y1", (parseFloat(cr.attr("y"))-1))
        .attr("y2",square10+(parseFloat(cr.attr("y"))+1+ (nm[2] == 9 ? 0 : 1)))
        .style("stroke-width", 2)
        .attr("stroke","#333");

      }

    }
}
  });


grd2.selectAll("line").remove();


  grd2.selectAll("rect").each(function(){
    var nm = d3.select(this).attr("id");
    var cr = d3.select(this);
    if (nm != null){
    if (nm[2] == 0){
      grd2.append("line")
      .attr("x1", parseFloat(cr.attr("x")-1))
      .attr("x2", square10sm+(parseFloat(cr.attr("x"))+1 + (nm[3] == 9 ? 0 : 1)))
      .attr("y1", parseFloat(cr.attr("y")))
      .attr("y2",parseFloat(cr.attr("y")))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else if (nm[2] == 9){
      grd2.append("line")
      .attr("x1", parseFloat(cr.attr("x")-1))
      .attr("x2", square10sm+(parseFloat(cr.attr("x"))+1 + (nm[3] == 9 ? 0 : 1)))
      .attr("y1", square10sm+(parseFloat(cr.attr("y"))))
      .attr("y2",square10sm+(parseFloat(cr.attr("y"))))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else{

      var cellchar = cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])]
      var checkcell_up = cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])-10]
      var checkcell_dn = cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])+10]


      if (cellchar != checkcell_up){
         grd2.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", square10sm+(parseFloat(cr.attr("x"))+1 + (nm[3] == 9 ? 0 : 1)))
        .attr("y1", parseFloat(cr.attr("y")-1))
        .attr("y2",parseFloat(cr.attr("y")-1))
        .style("stroke-width", 2)
        .attr("stroke","#333");
      }
      if (cellchar != checkcell_dn && nm[2]==9){
        grd2.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", square10sm+(parseFloat(cr.attr("x"))+1+ (nm[3] == 9 ? 0 : 1)))
        .attr("y1", square10sm+(parseFloat(cr.attr("y"))+1))
        .attr("y2",square10sm+(parseFloat(cr.attr("y")) +1))
        .style("stroke-width", 2)
        .attr("stroke","#333");
      }
    }

    if (nm[3] == 0){
      grd2.append("line")
      .attr("x1", parseFloat(cr.attr("x")))
      .attr("x2", (parseFloat(cr.attr("x"))))
      .attr("y1", parseFloat(cr.attr("y")-1))
      .attr("y2",square10sm+(parseFloat(cr.attr("y"))+1 + (nm[2] == 6 ? 0 : 1)))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else if (nm[3] == 9){
      grd2.append("line")
      .attr("x1", square10sm+(parseFloat(cr.attr("x"))))
      .attr("x2", square10sm+(parseFloat(cr.attr("x"))))
      .attr("y1", (parseFloat(cr.attr("y"))-1))
      .attr("y2",square10sm+(parseFloat(cr.attr("y"))+1+ (nm[2] == 9 ? 0 : 1)))
      .style("stroke-width", 2)
      .attr("stroke","#333");
    }
    else {

      var cellchar = cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])]
      var checkcell_lf = cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])-1]
      var checkcell_rt = cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])+1]

      if (cellchar != checkcell_lf){
        grd2.append("line")
        .attr("x1", parseFloat(cr.attr("x")-1))
        .attr("x2", parseFloat(cr.attr("x")-1))
        .attr("y1", parseFloat(cr.attr("y")-1))
        .attr("y2",square10sm+(parseFloat(cr.attr("y"))+1+ (nm[2] == 9 ? 0 : 1)))
        .style("stroke-width", 2)
        .attr("stroke","#333");        
      }
      if (cellchar != checkcell_rt && nm[3] == 9){

        grd2.append("line")
        .attr("x1", square10sm+(parseFloat(cr.attr("x"))+1.7))
        .attr("x2", square10sm+(parseFloat(cr.attr("x"))+1.7))
        .attr("y1", (parseFloat(cr.attr("y"))-1))
        .attr("y2",square10sm+(parseFloat(cr.attr("y"))+1+ (nm[2] == 9 ? 0 : 1)))
        .style("stroke-width", 2)
        .attr("stroke","#333");

      }
    }
}

  });

grd.selectAll("line").style("stroke","#000").style("stroke-width", 3);
grd2.selectAll("line").style("stroke","#000").style("stroke-width", 3);

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
      if (d3.select(this).attr("button") == null){
      var idnum = 10*(parseInt(d3.select(this).attr("id")[2])) + parseInt(d3.select(this).attr("id")[3])
        if (d3.select(this).attr("party") == 0) {d3.select(this).style("fill", simp_fill[1]);  cell_cols[idnum] = 0;}
        if (d3.select(this).attr("party") == 1) {d3.select(this).style("fill", simp_fill[2]); cell_cols[idnum] = 1;}
        if (d3.select(this).attr("party") == -1) {d3.select(this).style("fill", simp_fill[0]); cell_cols[idnum] = -1;}
}
    });



        r_win_i = [0,0,0,0,0,0];
        b_win_i = [0,0,0,0,0,0];
        n_win_i = [0,0,0,0,0,0];

        //compute_hists();



  
}


function update_dists(){

  grd2.selectAll("rect").each(function(d){
    var nm = d3.select(this).attr("id");
    if (nm != null){
    d3.select(this).style("fill",function() { return distfills(cur_plan_str[10*parseInt(nm[2]) + parseInt(nm[3])]);})}

  });

grid_borders();
}


function is_conn(s){

  for (var d=0; d<10; d++){
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
      if (s[currnode+1] == d && currnode%10!=9){ to_check.push(currnode+1);}
      if (s[currnode-1] == d && currnode%10!=0){ to_check.push(currnode-1);}
      if (s[currnode+10] == d){ to_check.push(currnode+10);}
      if (s[currnode-10] == d){ to_check.push(currnode-10);}
    }









    }
    if (!(seen.length == 10)){return false;}







  }

return true;




}



function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function swap_cells(s) {

  var val = false;
var string_copy =  (' ' + s).slice(1);
  while (!val){
    string_copy = (' ' + s).slice(1);
    var i1 = Math.floor(Math.random() * 100);
    var i2 = Math.floor(Math.random() * 100);

    var c1 = string_copy[i1];
    var c2 = string_copy[i2];

    if (c1 != c2){


      string_copy = setCharAt(string_copy, i1,c2);
      string_copy = setCharAt(string_copy, i2,c1);


      val = is_conn(string_copy);
      if (val && degreeweight){ val = .10*Math.random() < 1.0/count_valid_moves(string_copy);}
    }






  }

return string_copy;





}




var winbox = d3.select("#gridspace").append("svg")
            .attr("width",610)
            .attr("height",320);




            
            var vgrp = winbox.append("g");
            
            //vgrp.append("rect").style("fill","none").style("width",100).style("height",100).style("stroke-width",2).style("stroke","black");
            vgrp.append("text") .text("Is your plan an outlier for this distribution?")  .attr('dy','0.35em').attr('h',0).style("font-size","18px").attr("x",50).attr("y",10);
            var wr0 = vgrp.append("rect").attr("x",  0).attr("width",50).attr("fill","none").attr("i",0).attr("height",0).attr("y",250).style("fill-opacity",1).style("stroke","black").style("stroke-width",2);
            var wr1 = vgrp.append("rect").attr("x", 55).attr("width",50).attr("fill","none").attr("i",1).attr("height",0).attr("y",250).style("fill-opacity",1).style("stroke","black").style("stroke-width",2);
            var wr2 = vgrp.append("rect").attr("x",110).attr("width",50).attr("fill","none").attr("i",2).attr("height",0).attr("y",250).style("fill-opacity",1).style("stroke","black").style("stroke-width",2);
            var wr3 = vgrp.append("rect").attr("x",165).attr("width",50).attr("fill","none").attr("i",3).attr("height",0).attr("y",250).style("fill-opacity",1).style("stroke","black").style("stroke-width",2);
            var wr4 = vgrp.append("rect").attr("x",220).attr("width",50).attr("fill","none").attr("i",4).attr("height",0).attr("y",250).style("fill-opacity",1).style("stroke","black").style("stroke-width",2);
            var wr5 = vgrp.append("rect").attr("x",275).attr("width",50).attr("fill","none").attr("i",5).attr("height",0).attr("y",250).style("fill-opacity",1).style("stroke","black").style("stroke-width",2);
            var wr6 = vgrp.append("rect").attr("x",330).attr("width",50).attr("fill","none").attr("i",6).attr("height",0).attr("y",250).style("fill-opacity",1).style("stroke","black").style("stroke-width",2);
            var wr7 = vgrp.append("rect").attr("x",385).attr("width",50).attr("fill","none").attr("i",7).attr("height",0).attr("y",250).style("fill-opacity",1).style("stroke","black").style("stroke-width",2);
            var wr8 = vgrp.append("rect").attr("x",440).attr("width",50).attr("fill","none").attr("i",8).attr("height",0).attr("y",250).style("fill-opacity",1).style("stroke","black").style("stroke-width",2);
            var wr9 = vgrp.append("rect").attr("x",495).attr("width",50).attr("fill","none").attr("i",9).attr("height",0).attr("y",250).style("fill-opacity",1).style("stroke","black").style("stroke-width",2);
            var wr10 = vgrp.append("rect").attr("x",550).attr("width",50).attr("fill","none").attr("i",10).attr("height",0).attr("y",250).style("fill-opacity",1).style("stroke","black").style("stroke-width",2);


        vgrp.append("line")
          .attr("stroke","#000")
          .attr("stroke-width",3)
          .attr("x1",0)
          .attr("y1", 250)
          .attr("x2", 610)
          .attr("y2", 250);

            vgrp.append("text")  .attr('dy','0.15em').attr("x","25").attr('h',2).attr("y",259) .style("font-size","12px").attr("i",0).attr("text-anchor","middle");
            vgrp.append("text")   .attr('dy','0.15em').attr("x","80").attr('h',2).attr("y",259) .style("font-size","12px").attr("i",1).attr("text-anchor","middle");
            vgrp.append("text")  .attr('dy','0.15em').attr("x","135").attr('h',2).attr("y",259).style("font-size","12px").attr("i",2).attr("text-anchor","middle");
            vgrp.append("text")  .attr('dy','0.15em').attr("x","190").attr('h',2).attr("y",259).style("font-size","12px").attr("i",3).attr("text-anchor","middle");
            vgrp.append("text")   .attr('dy','0.15em').attr("x","245").attr('h',2).attr("y",259).style("font-size","12px").attr("i",4).attr("text-anchor","middle");
            vgrp.append("text")  .attr('dy','0.15em').attr("x","300").attr('h',2).attr("y",259).style("font-size","12px").attr("i",5).attr("text-anchor","middle");
            vgrp.append("text")  .attr('dy','0.15em').attr("x","355").attr('h',2).attr("y",259).style("font-size","12px").attr("i",6).attr("text-anchor","middle");
            vgrp.append("text")  .attr('dy','0.15em').attr("x","410").attr('h',2).attr("y",259).style("font-size","12px").attr("i",7).attr("text-anchor","middle");
            vgrp.append("text")  .attr('dy','0.15em').attr("x","465").attr('h',2).attr("y",259).style("font-size","12px").attr("i",8).attr("text-anchor","middle");
            vgrp.append("text")  .attr('dy','0.15em').attr("x","520").attr('h',2).attr("y",259).style("font-size","12px").attr("i",9).attr("text-anchor","middle");
            vgrp.append("text")  .attr('dy','0.15em').attr("x","575").attr('h',2).attr("y",259).style("font-size","12px").attr("i",10).attr("text-anchor","middle");




            vgrp.append("text") .text("0 Seats")  .attr('dy','0.15em').attr("x","3").attr('h',1).attr("y",259).style("font-size","12px");
            vgrp.append("text") .text("1 Seat")  .attr('dy','0.15em').attr("x","58").attr('h',1).attr("y",259).style("font-size","12px");
            vgrp.append("text") .text("2 Seats")  .attr('dy','0.15em').attr("x","113").attr('h',1).attr("y",259).style("font-size","12px");
            vgrp.append("text") .text("3 Seats")  .attr('dy','0.15em').attr("x","168").attr('h',1).attr("y",259).style("font-size","12px");
            vgrp.append("text") .text("4 Seats")  .attr('dy','0.15em').attr("x","223").attr('h',1).attr("y",259).style("font-size","12px");
            vgrp.append("text") .text("5 Seats")  .attr('dy','0.15em').attr("x","278").attr('h',1).attr("y",259).style("font-size","12px");
            vgrp.append("text") .text("6 Seats")  .attr('dy','0.15em').attr("x","333").attr('h',1).attr("y",259).style("font-size","12px");
            vgrp.append("text") .text("7 Seats")  .attr('dy','0.15em').attr("x","388").attr('h',1).attr("y",259).style("font-size","12px");
            vgrp.append("text") .text("8 Seats")  .attr('dy','0.15em').attr("x","443").attr('h',1).attr("y",259).style("font-size","12px");
            vgrp.append("text") .text("9 Seats")  .attr('dy','0.15em').attr("x","498").attr('h',1).attr("y",259).style("font-size","12px");
            vgrp.append("text") .text("10 Seats")  .attr('dy','0.15em').attr("x","553").attr('h',1).attr("y",259).style("font-size","12px");

function update_histo(newhist){


vgrp.selectAll("rect").each(function(d){
    var i = d3.select(this).attr("i");

    if (i != null){
        var newh = 200*newhist[i]/num_chain;
        d3.select(this).attr("height",newh);
        d3.select(this).attr("y",250-newh);  

                if (i == red_this){
            d3.select(this).style("fill","#66ABFF");
        } else {
            d3.select(this).style("fill","#cccccc");
        }       

    }
     
 });

vgrp.selectAll("text").each(function(d){
   if (d3.select(this).attr("h") == 2){
        var tmpi = d3.select(this).attr("i");
        var newh = 200*newhist[tmpi]/num_chain;

        d3.select(this).text(""+newhist[tmpi]);
        d3.select(this).attr("y", 245-newh );
    }

    });





}





var helptxt = grd.append("svg").attr("height",15*square10).attr("width",300).attr("x",0);
   




helptxt.append("text")
   .attr('dy','0.35em')
   .attr("width",300)
   .attr("x", 146)
   .attr("transform","translate(0,15)")
   .attr("text-anchor","middle")
   .text("Current Distribution");





helptxt.append("text")
   .attr('dy','0.35em')
   .attr("width",300)
   .attr("x", 146)
   .attr("y", 261)
   .attr("transform","translate(0,15)")
   .attr("text-anchor","middle")
   .style("font-size","12px")
   .text("Click cells to change their color");


helptxt.append("text")
   .attr('dy','0.35em')
   .attr("width",300)
   .attr("x", 146)
   .attr("y", 281)
   .attr("transform","translate(0,15)")
   .attr("text-anchor","middle")
   .style("font-size","12px")
   .text("Randomize");




 helptxt.append("rect")
  .attr("button",true)
    .attr("width",100)
    .attr("height",25)
    .attr("x",96)
    .attr("y",284)
    .attr("rx",8)
    .attr("ry",8)

    .style("fill","brown")
    .style("fill-opacity",.5)
    .on("click", function(d) {
      party_init = shuffle(party_init);
      grd.selectAll("rect").each(function(d){
        if (d3.select(this).attr("button")==null){
        var nm = d3.select(this).attr("id");
        var n = nm[2]-1;
        var k = nm[3]-1;
        
        d3.select(this).attr("party",function(d) {return party_init[10*n+k];})
        d3.select(this).style("fill",function(d) { return simp_fill[1+parseInt(d3.select(this).attr("party"))];})

        do_update2(-1);

}
      
      });

      });








function count_valid_moves(s){
  var count = 0;

  for(var i=0;i<99;i++){
    for(var j=i+1;j<100;j++){
      var val = false;


    string_copy = (' ' + s).slice(1);
    var i1 = i;
    var i2 = j;

    var c1 = string_copy[i1];
    var c2 = string_copy[i2];

    if (c1!=c2){
      string_copy = setCharAt(string_copy, i1,c2);
      string_copy = setCharAt(string_copy, i2,c1);


      val = is_conn(string_copy);
      if (val){count++;}
}


}
  }
return count;

}




