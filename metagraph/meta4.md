---
layout: default
customjs:
 - https://d3js.org/d3.v3.min.js
 - https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js
 - src-meta4/biggraph.js
 - src-meta4/smallgraph.js
 - src-meta4/ising1-4.js
 - src-meta4/ising2-4.js
 - src-meta4/ising1-4-p.js
 - src-meta4/ising2-4-p.js
---



<!---
<p style="float:left; width:150px">Here are two:</p> <center> <p style="margin:0;padding:0;font-size:20px;letter-spacing:-4px;line-height:14px;width:100px;float:left;justify:center;">
<span style="color:#73C6B6">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#73C6B6">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#73C6B6">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span><br/> <span style="color:#73C6B6">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span></p><p style="margin:0;padding:0;font-size:20px;letter-spacing:-4px;line-height:14px;width:100px;float:left;">
<span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span><br/> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#A569BD">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#CD6155">&#9724;</span></p>
</center>
<br />

-->
## This page is currently a work-in-progress
<center>
<h2> Welcome to Gridlandia!</h2>
<br/>

<p style="margin:0;padding:0;font-size:50px;letter-spacing:-10px;line-height:35px;">
<span style="color:#a17caa">&#9724;</span> <span style="color:#a17caa">&#9724;</span> <span style="color:#a17caa">&#9724;</span> <span style="color:#a17caa">&#9724;</span><br/> <span style="color:#a17caa">&#9724;</span> <span style="color:#a17caa">&#9724;</span> <span style="color:#a17caa">&#9724;</span> <span style="color:#a17caa">&#9724;</span><br/> <span style="color:#a17caa">&#9724;</span> <span style="color:#a17caa">&#9724;</span> <span style="color:#a17caa">&#9724;</span> <span style="color:#a17caa">&#9724;</span><br/> <span style="color:#a17caa">&#9724;</span> <span style="color:#a17caa">&#9724;</span> <span style="color:#a17caa">&#9724;</span> <span style="color:#a17caa">&#9724;</span></p>
</center>
<br/>


Gridlandia is trying to draw legislative districts for its upcoming elections.  The rules are that there must be four districts, they must be contiguous, and they must all be of the same size.  Since Gridlandia is laid out neatly in a four-by-four grid, it's not too hard to write all of the allowed districting plans down.  There are only 117 of them.  
<center>
Here is one:
<p style="margin:0;padding:0;font-size:50px;letter-spacing:-10px;line-height:35px;">
<span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span><br/> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span></p>
</center>
<br/>

We can impose a *graph* structure on the collection of all of these plans, where each node is a plan and two plans are connected if one can be transformed into the other by swapping a pair of cells in adjacent districts.

<p style="float:left; width:150px">Here are two adjacent ones</p>  <p style="margin:0;padding:0;font-size:20px;letter-spacing:-4px;line-height:14px;width:100px;float:left;justify:center;">
<span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span><br/> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span></p><p style="margin:0;padding:0;font-size:20px;letter-spacing:-4px;line-height:14px;width:100px;float:left;">
<span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#F4D03F">&#9724;</span><br/> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#F4D03F">&#9724;</span><br/> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span><br/> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span></p>
<p style="float:left;width:200px">since we can swap these two cells </p>   <p style="margin:0;padding:0;font-size:20px;letter-spacing:-4px;line-height:14px;width:100px;float:left;">
<span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#666666">&#9724;</span><br/> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#666666">&#9724;</span> <span style="color:#F4D03F">&#9724;</span><br/> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span><br/> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span></p><p style="float:left;width:200px">to turn the first into the second. </p> 

<br/><br/>


We call this structure the **metagraph of districting plans**.  Below, you can interact with this mathematical object.  The graph on the left is the complete metagraph.  Since Gridlandia is so symmetric, it might be useful to consider two districting plans to be *the same* if one can be transformed into the other by rotating or flipping the plan.  For example, 


<p style="float:left; width:150px">Here are two symmetric ones</p>  <p style="margin:0;padding:0;font-size:20px;letter-spacing:-4px;line-height:14px;width:100px;float:left;justify:center;">
<span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span><br/> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span></p><p style="margin:0;padding:0;font-size:20px;letter-spacing:-4px;line-height:14px;width:100px;float:left;">
<span style="color:#73C6B6">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#73C6B6">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#73C6B6">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#73C6B6">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#CD6155">&#9724;</span></p>
<p style="float:left;width:200px">by a 90 degree rotation. </p>



<br/><br/>



The graph on the right is the metagraph where plans which are symmetric are merged into the same node, and two nodes are linked if any two of their two constituent nodes are linked in the full metagraph.


<div id="chart1" style="width:100% text-align:left"></div>

Now let's think about elections in Gridlandia.  Gridlandia has plurality elections and two political parties, the Green Party and the Orange Party.  For simplicity, we'll start by assuming that everyone in the same cell votes the same way -- either for the Green candidate or the Orange candidate.  Within each district, the candidate which gets the most votes wins the election, and ties are not resolved.  Below, click a cell once to change its color.  On the left, the nodes in the metagraph will change color to indicate which party wins a legislative majority under the corresponding plan.  A node will remain grey if the number of Green- and Orange-favoring districts is equal.


<div id="chart2" style="width:100% text-align:left"></div>


Let's make things a little more realistic.  Instead of each cell voting entirely for one party, there are some Green and some Orange supporters in each cell -- a total of ten in each square.  The same electoral rules apply, but now we can think about a *distribution* of votes in each cell.  Left click on a square to increase the percentage of Orange voters, or right click it to decrease the percentage of Orange voters.  


<div id="chart3" style="width:100% text-align:left"></div>

