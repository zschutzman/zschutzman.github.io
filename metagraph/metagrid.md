---
layout: default
customjs:
 - loc_d3v3.js
 - https://d3js.org/d3.v4.min.js
 - https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js
 - http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
 - src-meta5/header.js
 - src-meta4/biggraph.js
 - src-meta4/smallgraph.js
 - src-meta4/ising1-4.js
 - src-meta4/ising2-4.js
 - src-meta4/ising1-4-p.js
 - src-meta4/ising2-4-p.js
---
<!-- <p style="margin:0;padding:0;font-size:70px;letter-spacing:-14px;line-height:50px;width:300px;float:left;justify:center;">
<span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <br/> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <br/> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <br/> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <br/> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> <span style="color:#660339">&#9724;</span> </p>
<br/><br/> -->

<!---







<p style="float:left; width:150px">Here are two:</p> <center> <p style="margin:0;padding:0;font-size:20px;letter-spacing:-4px;line-height:14px;width:100px;float:left;justify:center;">
<span style="color:#73C6B6">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#73C6B6">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#73C6B6">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span><br/> <span style="color:#73C6B6">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span></p><p style="margin:0;padding:0;font-size:20px;letter-spacing:-4px;line-height:14px;width:100px;float:left;">
<span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span> <span style="color:#73C6B6">&#9724;</span><br/> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#A569BD">&#9724;</span> <span style="color:#F4D03F">&#9724;</span> <span style="color:#CD6155">&#9724;</span> <span style="color:#CD6155">&#9724;</span><br/> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#A569BD">&#9724;</span> <span style="color:#CD6155">&#9724;</span></p>
</center>
<br />

-->

<!-- <div style="text-align:right; color:#aaaaaa;line-height:14px" width="100%"><small>
This page developed from a project at the <a href="http://gerrydata.org">Voting Rights Data Institute</a> during the summer of 2018
and is joint with Seth Drew, Eugene Henninger-Voss, and Amara Jaeger.
Special thanks to Mira Bernstein, whose <a href="https://docs.google.com/spreadsheets/d/1U8XXRwwJ3zLLu9Xx-xsrePBFsCXkYYFj_MB4t-ZaZ4k/edit#gid=2131508220">Liliputia project</a> served as inspiration.
</div>
<hr style="width:80%"> -->





<center>
<h2> Welcome to Gridlandia!</h2>
<br/>

<p align="center">
  <img width="200"  src="imgs/blankgrid.png?raw=true"> <br />

</p>


</center>
<br/>


Gridlandia is trying to draw legislative districts for its upcoming elections.  The rules are that there must be four districts, they must be contiguous, and they must all be of the same size.  Since Gridlandia is laid out neatly in a four-by-four grid, it's not too hard to write all of the allowed districting plans down.  There are only 117 of them.  
<center>
Here is one:
<p align="center">
  <img width="150"  src="imgs/fillgrid.png?raw=true"> <br />
</p>

</center>

We can impose a *graph* structure on the collection of all of these plans, where each node is a plan and two plans are connected if one can be transformed into the other by swapping a pair of cells in adjacent districts.

<p style="text-align:center;"> <img width="75"  src="imgs/fillgrid.png?raw=true">&nbsp; &nbsp;&nbsp;&nbsp;<img width="75"  src="imgs/showswapgrid.png?raw=true"> &nbsp;&nbsp;&nbsp;&nbsp;<img width="75"  src="imgs/swapgrid.png?raw=true"> <br/>
	<font size="3"> We can transfom the plan on the left into the plan on the right by swapping these two cells. </font>

</p>

We call this structure the **metagraph of districting plans**.  Below, you can interact with this mathematical object.  The graph on the left is the complete metagraph.  Since Gridlandia is so symmetric, it might be useful to consider two districting plans to be *the same* if one can be transformed into the other by rotating or flipping the plan.  For example,


<p style="text-align:center"> <img width="75"  src="imgs/fillgrid.png?raw=true">&nbsp;&nbsp;&nbsp;&nbsp; <img width="75"  src="imgs/rotgrid.png?raw=true"><br/>
	<font size="3"> We can transfom the plan on the left into the plan on the right by rotating 90 degrees. </font>

</p>


The graph on the right is the metagraph where plans which are symmetric are merged into the same node, and two nodes are linked if any two of their two constituent nodes are linked in the full metagraph.


<div id="chart1" style="width:100% text-align:left"></div>

Now let's think about elections in Gridlandia.  Gridlandia has plurality elections and two political parties, the <span style="color:#b2abd2"> **Purple** </span> Party and the <span style="color:#fdb863"> **Orange** </span>
 Party.  For simplicity, we'll start by assuming that everyone in the same cell votes the same way -- either for the <span style="color:#b2abd2"> **Purple** </span> candidate or the <span style="color:#fdb863"> **Orange** </span>
 candidate.  Within each district, the candidate which gets the most votes wins the election, and ties are not resolved.  Below, click a cell once to change its color.  On the left, the nodes in the metagraph will change color to indicate which party wins a legislative majority under the corresponding plan.  A node will remain grey if the number of <span style="color:#b2abd2"> <b>Purple</b></span>- and <span style="color:#fdb863"><b>Orange</b></span>
-favoring districts is equal.


<div id="chart2" style="width:100% text-align:left"></div>


Let's make things a little more realistic.  Instead of each cell voting entirely for one party, there are some <span style="color:#b2abd2"> **Purple** </span> and some <span style="color:#fdb863"> **Orange** </span>
 supporters in each cell -- a total of ten in each square.  The same electoral rules apply, but now we can think about a *distribution* of votes in each cell.  Left click on a square to increase the percentage of <span style="color:#fdb863"> **Orange** </span>
 voters, or right click it to decrease the percentage of <span style="color:#fdb863"> **Orange** </span> voters.  

 What happens when the <span style="color:#fdb863"> **Orange** </span> party has a slight majority in most of the cells but a few are 90 or 100 percent <span style="color:#b2abd2"> <b>Purple</b></span>?  Under which configurations can the minority party still win three out of four districts?  Are there any distributions of voters that cause there to be a <span style="color:#b2abd2"> **Purple** </span> colored metagraph node surrounded entirely by <span style="color:#fdb863"> **Orange** </span> colored nodes?


<div id="chart3" style="width:100% text-align:left"></div>


<!--
<h2> Welcome Back to Gridlandia </h2>

In the meantime, we've incorporated nine additional cells, for a total of 25.  Since the population has increased, we'd now like to draw *five* districts.  The same rules apply: each district must be contiguous and of the same size.  There are 4006 districting plans which satisfy these criteria, and we can construct the metagraph in the same way, with a node for each plan and an edge between plans that can be transformed into each other by swapping cells in adjacent districts.  We can write these all down, but this is too many to show all at once as a metagraph.  Instead, we'll show a local picture of the metagraph where you can see a districting plan and all of the other plans which can be formed by swapping one or two pairs of cells.







### Meta-tree and recenter-er
<div id="graph" style="width:100% text-align:left"></div>


### Click squares and see histograms - whole squares
<div id="graph2" style="width:100% text-align:left"></div>

### Is it possible for partial squares?-->



<div style="text-align:right; color:#888888;line-height:14px" width="100%"><small>
<hr style="width:100%">

This page developed from a project at the <br/>
<a href="http://gerrydata.org">Voting Rights Data Institute</a>,
Summer 2018 and is joint with <br/>
Seth Drew, Eugene Henninger-Voss, and Amara Jaeger. <br/>
Special thanks to Mira Bernstein, whose <a href="https://docs.google.com/spreadsheets/d/1U8XXRwwJ3zLLu9Xx-xsrePBFsCXkYYFj_MB4t-ZaZ4k/edit#gid=2131508220">Liliputia project</a> served as inspiration.
<br/><br/>

Version 0.8 <br/>
August 1, 2018 <br/>


</small>
</div>
