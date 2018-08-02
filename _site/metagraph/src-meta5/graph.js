var tooltip2 = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("z-index", "10")
	.style("opacity", 0);
	

var graph = d3.select("#graph").append("svg")
        .attr("width", width/3)
    .attr("height", height/1.5)
    .attr("transform", "translate(" + "-100" + ",-300)");
 
       
 
    g = graph.append("g") .attr("transform", "translate(" + (width/6 ) + "," + (height/3) + ")");

    


var tree = d3.tree()
    .size([2 * Math.PI, Math.min(width,height)/7])
    .separation(function(a, b) { return (a.parent == b.parent ? 1000 : 2000) / a.depth; });


    
function mk_gr(fn,num) {
    console.log(idno2);
    idno2 = num;
    console.log(fn,parseInt(num),idno2);
    
d3.json(fn, function(error, treeData) {
  if (error) throw error;

  var root = d3.hierarchy(treeData);
  tree(root);

 /* var link = g.selectAll(".link")
    .data(root.links())
    .enter().append("path")
      .attr("class", "link")
      .style("fill","none")
      .style("stroke-width","1.5")
      .style("opacity",.8)
      .style("stroke","red")
      .attr("d", d3.linkRadial()
          .angle(function(d) { return d.x; })
          .radius(function(d) { return d.y; }));*/
var link = g.selectAll(".link")
    .data(root.links())
    .enter().append("line")
      .attr("class", "link")
      .attr("stroke","#ccc")
      .attr("x1", function(d) { return radialPoint(d.source.x,d.source.y)[0]; })
      .attr("y1", function(d) { return radialPoint(d.source.x,d.source.y)[1]; })
      .attr("x2", function(d) { return radialPoint(d.target.x,d.target.y)[0]; })
      .attr("y2", function(d) { return radialPoint(d.target.x,d.target.y)[1]; });

  var node = g.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
      .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
      .attr("transform", function(d) { return "translate(" + radialPoint(d.x, d.y) + ")"; })
      .attr("districts", function(d) { return d.data.tup;})
            .attr("idno2", function(d) {return d.data.name;})


            .on("click",
                swapgraph)

      .on("mousemove", function(){return tooltip2.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

      .on("mouseover",function(){
          
        var c = d3.select(this);
        g.selectAll("rect").each(function(){
            if (d3.select(this).data()[0].data.name == c.data()[0].data.name){
                d3.select(this).style("stroke-width",6);
                return;
            }
        });

   
       
        tooltip2.style("visibility", "visible");
        tooltip2.html(function(d){return "HERE:  <p><img width='100' src='m5-imgs/whole/im_"+c.data()[0].data.name+".png'></p>";});  


        tooltip2.transition()		
        .duration(200)		
        .style("opacity",.95);		

   

      })
      
      .on("mouseout", function(){
          
          
          
        var c = d3.select(this);
        g.selectAll("rect").each(function(){
            if (d3.select(this).attr("idno2") == c.attr("idno2")){
                d3.select(this).style("stroke-width",2);
                return;
            }
        });
          tooltip2.style("visibility", "hidden");
  

            tooltip2.transition()		
                .duration(500)		
                .style("opacity", 0);	            
     });

  node.append("rect").attr("width", 27)//90
      .attr("height", 27)//90
      .style("stroke", "#666")
      .style("stroke-width",2)
       .attr("x", -10)//-37
      .attr("y", -10)//-37
      .attr("str_rep", function(d){ return d.data.str_rep.split('\n').join("").split(" ").join("");})
      
        .attr("districts", function(d) { return d.data.tup;})
        .attr("idno2", function(d) {return d.data.name;})
        .style("fill", function(d) {return get_my_col(d);})


 node.append("image")
 .attr("width",40)
 .attr("height", 27)
 .attr("x",-16)
 .attr("y",-17)
 .attr("xlink:href",function(d){return "m5-imgs/whole/im_"+d.data.name+".png";});  
 

});


}
function radialPoint(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
}




  
 function cl_gr(){
       graph.selectAll(".link").remove();
    graph.selectAll(".node").remove();
 }
 
 
 
 
 function get_my_col(rect){
    var cnt = 0;
  var chk = dist_wins;
  

 distloop = rect.data.tup;
             for(var i=0;i<5;i++){
             cnt += Math.sign(chk[distloop[i]]);
            }
            
              if (rect.data.name == idno2){red_this = (cnt+5)/2; update_textboxes();console.log("REDTHIS",red_this);}
      

            var col = Math.sign(cnt) + 1;
            if (col == 1){console.log("FOUND A 1?");}
            return simp_fill[col];
}






function get_col(){
        
        var chk = compute_hists();
        
        dist1=0;
        dist2=0;
        dist3=0;
        dist4=0;
        dist5=0;
        red_this = 0;
        console.log(graph.selectAll("rect"));
        graph.selectAll("rect").each(function(){
                    cnt=0;

            distloop = d3.select(this).attr("districts");
            distloop = JSON.parse("[" +  distloop.split("(").join("").split(")").join("") + "]")
            for(var i=0;i<5;i++){
             cnt += Math.sign(chk[distloop[i]]);
             
            }

            if (d3.select(this).attr("idno2") == idno2){console.log("IN");red_this = (cnt + 5)/2;}
        
   
        

        var col = Math.sign(cnt) + 1;
        if (col ==1){console.log("FOUND A 1??");
            for(var i=0;i<5;i++){
             console.log("IT",i,Math.sign(chk[distloop[i]]));
             
            }
        }
        d3.select(this).style("fill", simp_fill[col]);
    
    });
}




function swapgraph(){
    var newgr = d3.select(this).data()[0].data.name;
    if (d3.event.defaultPrevented) return;
    if (idno2 == d3.select(this).data()[0].data.name) return;
              tooltip2.style("visibility", "hidden");
  

            tooltip2.transition()		
                .duration(200)		
                .style("opacity", 0);
                
                
                
    tx = d3.select(this).attr("cx");
    ty = d3.select(this).attr("cy");
   
    var n = 0;

    
    
    graph.selectAll("g").each(function(){n++;})
    .transition()
    .duration(200)
    .style("opacity",0)
    .on("end",function(){n--;if(!n){cl_gr();
                                    mk_gr("m5-graphs/whole_trees2/g"+newgr+".json", newgr);
                                    graph.selectAll("g").transition()
    .duration(200)
    .style("opacity",1);
                                   }
                        });
    var cnt = 0;
    var chk = compute_hists();
    
    do_update(-1);


    
    


    
}

////
