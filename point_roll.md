---
layout: twocol
---


<h2 style="margin-bottom: 7px; margin-top:10px" >  Point Roll! </h2>



<button onclick="randstats()"> click </button>
<span id="stat1" /> <span id="stat2" /> <span id="stat3" /> <span id="stat4" /> <span id="stat5" /> <span id="stat6" />
<script>

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



function randstats(){
var pts = [8,8,8,8,8,8]
var s = 8*6
while(s < 78){

var i = getRandomInt(6)

if (pts[i] != 18){
  pts[i]++
  s++;
}


document.getElementById("stat1").innerHTML = pts[0]
document.getElementById("stat2").innerHTML = pts[1]
document.getElementById("stat3").innerHTML = pts[2]
document.getElementById("stat4").innerHTML = pts[3]
document.getElementById("stat5").innerHTML = pts[4]
document.getElementById("stat6").innerHTML = pts[5]

}
}


</script>