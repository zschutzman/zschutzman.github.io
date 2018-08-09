---
layout: default
customjs:
 - loc_d3v3.js
 - https://d3js.org/d3.v4.min.js
 - https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js
 - http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
 - src-meta5/header.js
 - src-meta5/distbox.js
 - src-meta5/grid.js
 - src-meta5/graph.js
 - src-meta5/histograms.js
 - src-meta5/init.js
---


<style>


.previous {
    background-color: #f1f1f1;
    color: black;
}

.next {
    background-color: #f1f1f1;
    color: black;
}

.round {
    border-radius: 50%;
}
</style>

<p style="text-align:left;">
<a href="./metagrid" class="previous" style="padding: 10px 20px">&laquo; Go back to the 4x4 analysis</a>
</p>


<center>
<h2> Welcome back to Gridlandia!</h2>
<br/>
<p align="center">
  <img width="200"  src="imgs/blankgrid5.png?raw=true"><br />

</p>

</center>


In the meantime, we've incorporated nine additional cells, for a total of 25.  Since the population has increased, we'd now like to draw *five* districts.  The same rules apply: each district must be contiguous and of the same size.  There are 4006 districting plans which satisfy these criteria, and we can construct the metagraph in the same way, with a node for each plan and an edge between plans that can be transformed into each other by swapping cells in adjacent districts.  We can write these all down, but this is too many to show all at once as a metagraph.  Instead, we'll show a local picture of the metagraph where you can see a districting plan and all of the other plans which can be formed by swapping one or two pairs of cells.


Click on a plan in the local metagraph to recenter at its neighborhood.  Alternatively, use the panel on the left to build a districting plan and jump directly to it.  Click the squares on the left to change the color of the square and see which party wins a majority of seats.





<div id="chart1" style="width:100% text-align:left"></div>



Since there are 4006 possible districting plans, it's hard to get a good sense of whether the distribution of votes allows for a lot of <span style="color:#fca336"><b>Orange</b></span>-favoring plans or <span style="color:#857ab8"><b>Purple</b></span>-favoring plans.  A local neighborhood of the metagraph may consist entirely of plans which give the <span style="color:#857ab8"><b>Purple</b></span> Party the majority of seats, even though most other plans actually favor the <span style="color:#fca336"><b>Orange</b></span> Party.

Instead of trying to draw the whole metagraph, we can compute some *statistics* about all of the plans with respect to the distribution and also for the distribution with respect to all of the plans.  Here, you can build a plan using the panel on the left, or click to navigate through the metagraph in the previous section.  The current plan will be displayed next to the navigator panel.  Next to that, you can click the square to change the distributions of the voters, just as before.  Finally, there are two histograms.  

The first histogram shows how many distributions of voters with the same number of <span style="color:#fca336"><b>Orange</b></span> and <span style="color:#857ab8"><b>Purple</b></span> squares as the distribution you picked result in a certain number of seats for the <span style="color:#857ab8"><b>Purple</b></span> Party in your selected plan.  The number of <span style="color:#857ab8"><b>Purple</b></span> seats in your selected distribution is indicated by the <span style="color:#99CC9A"><b>Green</b></span> bar.

The second histogram shows how many <span style="color:#857ab8"><b>Purple</b></span> seats your distribution gives over all 4006 possible districting plans.  The number of <span style="color:#857ab8"><b>Purple</b></span> seats in your selected plan is indicated by the <span style="color:#66ABFF"><b>Blue</b></span> bar.


<div id="chart2" style="width:100% text-align:left"></div>



How should we interpret this?  

Let's start with the first histogram. This histogram shows the number of distributions which award the <span style="color:#857ab8"><b>Purple</b></span> Party wins a certain number of seats in your plan.  We can use this to compare the outcome with your distribution with all of the other outcomes.  If the <span style="color:#66ABFF"><b>Blue</b></span> bar is to the left of most of the mass in the histogram, it means that your arrangement of voters has fewer <span style="color:#857ab8"><b>Purple</b></span> seats than if we had chosen a random arrangement of the same voters for the same districting plan.  Conversely, if the <span style="color:#66ABFF"><b>Blue</b></span> bar is to the right of most of the mass in the histogram, then your arrangement of voters awards *more* seats than average to the <span style="color:#857ab8"><b>Purple</b></span> Party, fixing your districting plan.  These may suggest that your plan was carefully selected to favor one of the parties.

The second histogram tells the same story, but in reverse.  If the <span style="color:#99CC9A"><b>Green</b></span> bar is to the left of most of the distribution, it means that, fixing your *arrangment of voters*, among all possible ways to draw the districts, your plan gives fewer than the average number of seats to the <span style="color:#857ab8"><b>Purple</b></span> Party, and if the <span style="color:#99CC9A"><b>Green</b></span> bar is to the right of most of the mass in the histogram, then your plan has *more* <span style="color:#857ab8"><b>Purple</b></span> seats than the average plan.  This histogram shows how difficult it is to find plans which favor a particular party.  If you try putting ten <span style="color:#857ab8"><b>Purple</b></span> voters on the grid in a very spread out way, there are very few plans in which the <span style="color:#857ab8"><b>Purple</b></span> Party wins three seats.  If you cluster them closer together, then there are far more ways to draw plans which give three seats to the <span style="color:#857ab8"><b>Purple</b></span> Party.



Next, we'll look at the 7x7 grid, which has too many valid districting plans for us to actually write down, so we'll have to develop some more sophisticated methods to do these kinds of statistical comparisons.

<p style="text-align:left;">
<a href="./metagrid" class="previous" style="padding: 10px 20px">&laquo; Go back to the 4x4 metagraph</a>
<span style="float:right;"><a href="./metagrid-3" class="next" style="padding: 10px 20px"> Check out sampling on the 7x7 grid &raquo;</a></span>

</p>


<div style="text-align:right; color:#888888;line-height:14px" width="100%"><small>
<hr style="width:100%">

This page developed from a project at the<br/>
<a href="http://gerrydata.org">Voting Rights Data Institute</a>,
Summer 2018 and is joint with<br/>
Seth Drew, Eugene Henninger-Voss, and Amara Jaeger.<br/>
Special thanks to Mira Bernstein, whose <a href="https://docs.google.com/spreadsheets/d/1U8XXRwwJ3zLLu9Xx-xsrePBFsCXkYYFj_MB4t-ZaZ4k/edit#gid=2131508220">Liliputia project</a> served as inspiration.
<br/><br/>

Version 0.9<br/>
August 9, 2018<br/>


</small>
</div>


<!-- 
<span style="color:#857ab8"><b>Purple</b></span>
<span style="color:#fca336"><b>Orange</b></span>
<span style="color:#99CC9A"><b>Green</b></span>
<span style="color:#66ABFF"><b>Blue</b></span>
-->