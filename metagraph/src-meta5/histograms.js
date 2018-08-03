

var winbox = d3.select("#chart2").append("svg")
            .attr("width",350)
            .attr("height",700);




            
            var wgrp = winbox.append("g");
            
            //wgrp.append("rect").style("fill","none").style("width",100).style("height",100).style("stroke-width",2).style("stroke","black");
            wgrp.append("text") .text("For this distribution of votes, among all districting plans:")  .attr('dy','0.35em').attr("transform","translate(0,350)");;
            var wr0 = wgrp.append("rect").attr("x",  0).attr("width",50).attr("fill","black").attr("i",0).attr("height",50).attr("y",350);
            var wr1 = wgrp.append("rect").attr("x", 50).attr("width",50).attr("fill","green").attr("i",1).attr("height",50).attr("y",350);
            var wr2 = wgrp.append("rect").attr("x",100).attr("width",50).attr("fill","blue").attr("i",2).attr("height",50).attr("y",350);
            var wr3 = wgrp.append("rect").attr("x",150).attr("width",50).attr("fill","red").attr("i",3).attr("height",50).attr("y",350);
            var wr4 = wgrp.append("rect").attr("x",200).attr("width",50).attr("fill","yellow").attr("i",4).attr("height",50).attr("y",350);
            var wr5 = wgrp.append("rect").attr("x",250).attr("width",50).attr("fill","purple").attr("i",5).attr("height",50).attr("y",350);


            



            
            var dgrp = winbox.append("g");
            
            //wgrp.append("rect").style("fill","none").style("width",100).style("height",100).style("stroke-width",2).style("stroke","black");
            dgrp.append("text") .text("For this districting plan, among all distributions with "+num_red+" Red voters:")  .attr('dy','0.35em');
            var tr0 = dgrp.append("rect").attr("x",  0).attr("width",50).attr("fill","black").attr("i",0).attr("height",50).attr("y",50);
            var tr1 = dgrp.append("rect").attr("x", 50).attr("width",50).attr("fill","green").attr("i",1).attr("height",50).attr("y",50);
            var tr2 = dgrp.append("rect").attr("x",100).attr("width",50).attr("fill","blue").attr("i",2).attr("height",50).attr("y",50);
            var tr3 = dgrp.append("rect").attr("x",150).attr("width",50).attr("fill","red").attr("i",3).attr("height",50).attr("y",50);
            var tr4 = dgrp.append("rect").attr("x",200).attr("width",50).attr("fill","yellow").attr("i",4).attr("height",50).attr("y",50);
            var tr5 = dgrp.append("rect").attr("x",250).attr("width",50).attr("fill","purple").attr("i",5).attr("height",50).attr("y",50);            
            

var tr_list = [tr0,tr1,tr2,tr3,tr4,tr5]

            
function update_textboxes(){
    
    num_red = 0;
    grd3.selectAll('rect').each(function(d){
        if (d3.select(this).attr("party") == 1) num_red+=1;

    });
    
wgrp.selectAll("rect").each(function(d){
    
    var i = d3.select(this).attr("i");

    if (i != null){
        var newh = r_win_i[i]/20;
        d3.select(this).attr("height",newh);
        d3.select(this).attr("y",700-newh)
        

    }
     
 });
console.log(elec_dist[num_red]);


dgrp.selectAll("rect").each(function(d){
    console.log(this);
    var i = d3.select(this).attr("i");
    if (i != null){
        var toth = 0;
        for (var jnk in elec_dist[num_red]){toth += elec_dist[num_red][jnk];}
        var newh = 200*elec_dist[num_red][i]/toth;
        console.log(newh,"HEIGHT");
       
        d3.select(this).attr("height" , newh);
        d3.select(this).attr("y",350-newh)
        

    }
    else{
     d3.select(this).text(red_this + "Among all distributions with "+num_red +" Red voters, this plan results in:")
    }
});
}
function compute_hists() {
    var st;
    r_win_i = [0,0,0,0,0,0];
    b_win_i = [0,0,0,0,0,0];
    n_win_i = [0,0,0,0,0,0];  
    Object.keys(dist_wins).forEach(v => dist_wins[v] = 0);
    Object.keys(plan_wins).forEach(v => plan_wins[v] = [0,0]);

    for(var i=0; i<Object.keys(dist_strings).length; i++){
    var cnt = 0;
    var tot = 0;
        st = dist_strings[i];
        grd3.selectAll("rect").each(function(e){

            var b = parseInt(d3.select(this).attr("party"));
            tot = tot + (b*st[cnt]);
            cnt = cnt+1;

        });
        
        dist_wins[i] = Math.sign(tot);
        
        

    }
    for (var key in plan_wins){
            var key2 = JSON.parse("[" +  key.split("(").join("").split(")").join("") + "]");
        for (var d=0;d<5;d++){
            
            var c = dist_wins[key2[d]];
            if (c>0){plan_wins[key][0] +=1;}
            if (c<0){plan_wins[key][1] +=1;}
            
            
            
        }
        
       r_win_i[plan_wins[key][0]] +=1;
       b_win_i[plan_wins[key][1]] +=1;
        
        
    }
  return dist_wins;
}
