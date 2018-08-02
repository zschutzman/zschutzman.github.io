var idno2 = 0;
var width = w;
var height = h;
var num_red = 0;
var red_this = 0;

var lx=-1;
var ly=-1;

//var simp_fill = ['#244999','#BBAA90','#D22532'];

// calculate number of rows and columns
var square5sRow = 5;
var square5sColumn = 5;
var square5=25;

  
    
var clsq = false;


 var request = new XMLHttpRequest();
   request.open("GET", "./src-meta5/data/plan_strings.json", false);
   request.send(null)
   var plan_strings = JSON.parse(request.responseText);

   
 var request = new XMLHttpRequest();
   request.open("GET", "./src-meta5/data/dist_strings.json", false);
   request.send(null)
   var dist_strings = JSON.parse(request.responseText);

 var request = new XMLHttpRequest();
   request.open("GET", "./src-meta5/data/dist_wins.json", false);
   request.send(null)
   var dist_wins = JSON.parse(request.responseText);
   
 var request = new XMLHttpRequest();
   request.open("GET", "./src-meta5/data/plan_wins.json", false);
   request.send(null)
   var plan_wins = JSON.parse(request.responseText);
   

 var request = new XMLHttpRequest();
   request.open("GET", "./src-meta5/data/dist2html.json", false);
   request.send(null)
   var dist2html = JSON.parse(request.responseText);
   

 var request = new XMLHttpRequest();
   request.open("GET", "./src-meta5/data/partial_plan_tree.json", false);
   request.send(null)
   var partial_plan_tree = JSON.parse(request.responseText);
   

 var request = new XMLHttpRequest();
   request.open("GET", "./src-meta5/data/part_plan2html.json", false);
   request.send(null)
   var part_plan2html = JSON.parse(request.responseText);

   
 var request = new XMLHttpRequest();
   request.open("GET", "./src-meta5/data/dist_lookup.json", false);
   request.send(null)
   var dist_lookup = JSON.parse(request.responseText);
   
 var request = new XMLHttpRequest();
   request.open("GET", "./src-meta5/data/elec_dist.json", false);
   request.send(null)
   var elec_dist = JSON.parse(request.responseText);


console.log(dist_lookup);
   
for (var key in plan_wins){
    plan_wins[key] = JSON.parse("[" +  plan_wins[key].split("(").join("").split(")").join("") + "]");}
      
var r_win_i = [0,0,0,0,0,0];
var b_win_i = [0,0,0,0,0,0];
var n_win_i = [0,0,0,0,0,0];
var rwin = 0;
var bwin=0;




var hoff = 130;
var voff = 15;


var plan = [];


function distboxclick(){
    plan.push(parseInt(d3.select(this).attr("distno")));
  
    distbox.selectAll("g").remove();
    distbox2.selectAll("g").remove();
    if (plan.length ==5){
     
        var newgr = "("+plan.join(", ")+")";
        console.log(newgr);
        newgr = dist_lookup[newgr];
        console.log(newgr);
        var n = 0;
        if (newgr !=idno2){
               graph.selectAll("g").each(function(){n++;})
    .transition()
    .duration(200)
    .style("opacity",0)
    .on("end",function(){n--;if(!n){cl_gr();
                                    mk_gr2("m5-graphs/whole_trees2/g"+newgr+".json", newgr);
                                    graph.selectAll("g").transition()
    .duration(200)
    .style("opacity",1);
                                   }
                        });
        }
    
        
        
        plan = [];}
    constr_distbox();
    constr_distbox2();
    
}



var distbox = d3.select("#graph").append("svg")
            .attr("width",300)
            .attr("height",h);

distbox.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",100)
    .attr("height",15)
    .style("fill","red")
    .on("click", function(d) {
        plan = [];
        distbox.selectAll("g").remove();
        constr_distbox();
        constr_distbox2();
    })
distbox.append("text")
   .attr("x",0)
   .attr("y",7)
   .text("RESET")
   .attr('dy','0.35em')
       .on("click", function(d) {
        plan = [];
        distbox.selectAll("g").remove();
        constr_distbox();
        constr_distbox2();
       });
distbox.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",100)
    .attr("height",15)
    .style("fill","red")
    .style("fill-opacity",0)
    .on("click", function(d) {
        plan = [];
        distbox.selectAll("g").remove();
        constr_distbox();
        constr_distbox2();
    })


 function constr_distbox(){      
            var wgrp = distbox.append("g");
            var i = 0;
            var j = 0;
if (plan.length == 0){
for (var k=0; k<40; k++){
    if (partial_plan_tree["("+k+")"] != null){
        var kk = "("+k+")";
        

            
            
                  wgrp.append("image")
                    .attr("width",47)
                    .attr("height", 47)
                    .attr("x",31+j*54)
                    .attr("y",31+i*54)
                    
                    .attr("xlink:href",function(d){return "m5-imgs/dists/im_"+kk+".png";});  

            
                    
            wgrp.append("rect")
                .attr("width",50)
                .attr("height", 50)
                .attr("x",30+j*54)
                .attr("y",30+i*54)
                .style("stroke-width",2)
                .style("stroke","purple")
                .style("fill-opacity",0)
                .attr("distno", k)
                .on("click",distboxclick);
            
                
                
            j+=1;
            if (j==5){j=0; i+=1;}
                }
}
}



else if (plan.length >= 1){
    var plkey = "(" + plan.join(", ") + ")";

    var i= 0;
    var j = 0;
    for (var k=0; k<partial_plan_tree[plkey].length; k++){
       var kk = partial_plan_tree[plkey][k];
       var dno =  kk[kk.length-1];
       kk = "(" + kk.join(",") + ")"
       
       
                              
                  wgrp.append("image")
                    .attr("width",47)
                    .attr("height", 47)
                    .attr("x",31+j*54)
                    .attr("y",31+i*54)
                    
                    .attr("xlink:href",function(d){return "m5-imgs/dists/im_"+kk+".png";});  
                    
            wgrp.append("rect")
                .attr("width",50)
                .attr("height", 50)
                .attr("x",30+j*54)
                .attr("y",30+i*54)
                .style("stroke-width",2)
                .style("stroke","purple")
                .style("fill-opacity",0)
                .attr("distno", dno)
                .on("click",distboxclick);
            
            
                
                
            j+=1;
            if (j==5){j=0; i+=1;}
    }}
    
    
    


 }
 constr_distbox();


 
 
 function distbox2click(){
    plan.push(parseInt(d3.select(this).attr("distno")));
  
    distbox2.selectAll("g").remove();
    if (plan.length ==5){
     
        var newgr = "("+plan.join(", ")+")";
        console.log(newgr);
        newgr = dist_lookup[newgr];
        console.log(newgr);
        var n = 0;
        if (newgr !=idno2){
               graph.selectAll("g").each(function(){n++;})
    .transition()
    .duration(200)
    .style("opacity",0)
    .on("end",function(){n--;if(!n){cl_gr();
                                    mk_gr2("m5-graphs/whole_trees2/g"+newgr+".json", newgr);
                                    graph.selectAll("g").transition()
    .duration(200)
    .style("opacity",1);
                                   }
                        });
        }
    
        
        
        plan = [];}
    constr_distbox();
    constr_distbox2();
    
}



var distbox2 = d3.select("#graph2").append("svg")
            .attr("width",300)
            .attr("height",800);

distbox2.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",100)
    .attr("height",15)
    .style("fill","red")
    .on("click", function(d) {
        plan = [];
        distbox2.selectAll("g").remove();
        constr_distbox();
        constr_distbox2();
    })
distbox2.append("text")
   .attr("x",0)
   .attr("y",7)
   .text("RESET")
   .attr('dy','0.35em')
       .on("click", function(d) {
        plan = [];
        distbox2.selectAll("g").remove();
        constr_distbox();
        constr_distbox2();
       });
distbox2.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",100)
    .attr("height",15)
    .style("fill","red")
    .style("fill-opacity",0)
    .on("click", function(d) {
        plan = [];
        distbox2.selectAll("g").remove();
        constr_distbox();
        constr_distbox2();
    })


 function constr_distbox2(){      
            var wgrp = distbox2.append("g");
            var i = 0;
            var j = 0;
if (plan.length == 0){
for (var k=0; k<40; k++){
    if (partial_plan_tree["("+k+")"] != null){
        var kk = "("+k+")";
        

            
            
                  wgrp.append("image")
                    .attr("width",47)
                    .attr("height", 47)
                    .attr("x",31+j*54)
                    .attr("y",31+i*54)
                    
                    .attr("xlink:href",function(d){return "m5-imgs/dists/im_"+kk+".png";});  

            
                    
            wgrp.append("rect")
                .attr("width",50)
                .attr("height", 50)
                .attr("x",30+j*54)
                .attr("y",30+i*54)
                .style("stroke-width",2)
                .style("stroke","purple")
                .style("fill-opacity",0)
                .attr("distno", k)
                .on("click",distbox2click);
            
                
                
            j+=1;
            if (j==5){j=0; i+=1;}
                }
}
}



else if (plan.length >= 1){
    var plkey = "(" + plan.join(", ") + ")";

    var i= 0;
    var j = 0;
    for (var k=0; k<partial_plan_tree[plkey].length; k++){
       var kk = partial_plan_tree[plkey][k];
       var dno =  kk[kk.length-1];
       kk = "(" + kk.join(",") + ")"
       
       
                              
                  wgrp.append("image")
                    .attr("width",47)
                    .attr("height", 47)
                    .attr("x",31+j*54)
                    .attr("y",31+i*54)
                    
                    .attr("xlink:href",function(d){return "m5-imgs/dists/im_"+kk+".png";});  
                    
            wgrp.append("rect")
                .attr("width",50)
                .attr("height", 50)
                .attr("x",30+j*54)
                .attr("y",30+i*54)
                .style("stroke-width",2)
                .style("stroke","purple")
                .style("fill-opacity",0)
                .attr("distno", dno)
                .on("click",distboxclick);
            
            
                
                
            j+=1;
            if (j==5){j=0; i+=1;}
    }}
    
    
    


 }
 constr_distbox2();
