---
layout: default
customjs:
 - loc_d3v3.js
 - https://d3js.org/d3.v4.min.js
 - https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js
 - http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
 - src-meta5/header.js
 - src-meta5/distbox.js
 - src-meta5/histograms.js
 - src-meta5/graph.js
 - src-meta5/grid.js
 - src-meta5/init.js
---





### UNDER CONSTRUCTION: COME BACK SOON!




<!-- 

<h2> Welcome Back to Gridlandia </h2>

In the meantime, we've incorporated nine additional cells, for a total of 25.  Since the population has increased, we'd now like to draw *five* districts.  The same rules apply: each district must be contiguous and of the same size.  There are 4006 districting plans which satisfy these criteria, and we can construct the metagraph in the same way, with a node for each plan and an edge between plans that can be transformed into each other by swapping cells in adjacent districts.  We can write these all down, but this is too many to show all at once as a metagraph.  Instead, we'll show a local picture of the metagraph where you can see a districting plan and all of the other plans which can be formed by swapping one or two pairs of cells.


Click on a plan in the local metagraph to recenter at its neighborhood.  Alternatively, use the panel on the left to build a districting plan and jump directly to it.  Click the squares on the left to change the color of the square and see which party wins a majority of seats.




### Meta-tree and recenter-er
<div id="chart1" style="width:100% text-align:left"></div>



Since there are 4006 possible districting plans, it's hard to get a good sense of whether the distribution of votes allows for a lot of <span style="color:#fdb863"> <b>Orange</b></span>-favoring plans or <span style="color:#b2abd2"> <b>Purple</b></span>-favoring plans.  A local neighborhood of the metagraph may consist entirely of plans which give the <span style="color:#b2abd2"> <b>Purple</b></span> Party the majority of seats, even though most other plans actually favor the <span style="color:#fdb863"> <b>Orange</b></span> Party.

Instead of trying to draw the whole metagraph, we can compute some *statistics* about all of the plans with respect to the distribution and also for the distribution with respect to all of the plans.  Here, you can build a plan using the panel on the left, or click to navigate through the metagraph in the previous section.  The current plan will be displayed next to the navigator panel.  Next to that, you can click the square to change the distributions of the voters, just as before.  Finally, there are two histograms.  

The first shows, for the current plan, how many different ways there are to configure the distribution of voters for <span style="color:#fdb863"> <b>Orange</b></span> to win a certain number of seats.  The ***GREEN*** bar indicates the number of seats your current distribution gives the <span style="color:#fdb863"> <b>Orange</b></span> Party.  The second shows, for the distribution of voters you've chosen in the square to the left, how many districting plans give a certain number of seats to the <span style="color:#fdb863"> <b>Orange</b></span> Party, and the ***GREEN*** bar shows the number of seats the <span style="color:#fdb863"> <b>Orange</b></span> Party wins in your current plan.




### Click squares and see histograms - whole squares
<div id="chart2" style="width:100% text-align:left"></div>





### Is it possible for partial squares? -->



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
