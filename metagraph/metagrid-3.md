---
layout: default
customjs:
 - https://d3js.org/d3.v5.min.js
 - https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js
 - http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
 - src-meta7/mcmc-grid.js
 - src-meta7/randwalk.js
 - src-meta7/mcmc2.js
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
<a href="./metagrid-2" class="previous" style="padding: 10px 20px">&laquo; Go back to statistical techniques on the 5x5</a>
</p>




<div id="randomwalk" style="display: block; margin: auto; text-align:center"></div>




<div id="gridspace" style="width:100% text-align:left"></div>



If you leave your distribution of voters alone and click the Sample button multiple times, the histogram will change, but not by too much, and the general shape will still be the same.  This is because even though 1,000 is a very small number compared to 158,753,814, it's still a large enough sample of plans that we can be reasonably confident that the sample is *representative* of the whole collection of plans.  How to do this in the real world where we need to draw districts on states and municipalities which may have hundreds or thousands of cells is a hot area of research in redistricting.




We promised earlier to talk about MCMC for optimization, and just as it can be a powerful tool for analyzing districting plans, it can also be used to *draw* the plans.  What if we had some distribution of <span style="color:#857ab8"><b>Purple</b></span> and <span style="color:#fca336"><b>Orange</b></span> voters, and what we really want to do is find a plan which maximizes the number of seats that the <span style="color:#857ab8"><b>Purple</b></span> party wins?  On a small example like this, it's probably not too hard to do by hand, although you might end up painting yourself into a corner, so to speak, if you draw six districts that you really like but are unable to draw the seventh.  

We can use MCMC to help us out. Choose a distribution of voters, then when you click a button, the random walk algorithm will run for 1,500 steps, keeping track of the most <span style="color:#857ab8"><b>Purple</b></span>- or <span style="color:#fca336"><b>Orange</b></span>-favoring plan it's seen so far.  Every 150 steps, it restarts its walk from that best-so-far plan, and at the end it draws the best one it found.  



<div id="optspace" style="display: block; margin: auto; text-align:center"></div>


The idea behind this is that plans which disproportionately favor one particular party tend to be near each other in the metagraph, so we should search for improvements near the best plan we've already seen.   However, we don't want to get stuck in a neighborhood which has good plans, but not the best ones, so we include the possibility for the random walk to move to a better location, which is controlled by the restart frequency.


You'll notice that this does really well, but not always perfectly.  For example, if you make the top three rows all <span style="color:#fca336"><b>Orange</b></span> and the bottom four all <span style="color:#857ab8"><b>Purple</b></span>, if you try a few times, the algorithm will probably find a plan that lets the <span style="color:#857ab8"><b>Purple</b></span> Party win six seats, but almost certainly not one with seven <span style="color:#857ab8"><b>Purple</b></span> districts.  This is for two reasons -- first, that there is only one plan which has seven <span style="color:#857ab8"><b>Purple</b></span>-favoring districts (seven vertical strips), and the second is that this plan has very low degree in the metagraph, so it's hard for the random walk to find it.  It's remarkable that it can even find a plan with six <span style="color:#857ab8"><b>Purple</b></span>-favoring districts.  If you plug that distribution into the sampling tool above and look at the histograms, you'll see that the vast majority of plans have four <span style="color:#857ab8"><b>Purple</b></span> seats, with a small handful of plans with five.  Very rarely will it even find a six-<span style="color:#857ab8"><b>Purple</b></span>-seat plan, which demonstrates the effectiveness of the restarting mechanism. 


Sampling real-world districting plans is of course much more complex than sampling on the grid, but fundamentally the idea of the random walk is the same.  In practice, modifications can be made to this walk to sample from whatever distribution over plans you want.  The first implementation on this page is close to one which samples uniformly, and the second implementation samples from a distribution which weights more heavily towards <span style="color:#857ab8"><b>Purple</b></span>- or <span style="color:#fca336"><b>Orange</b></span>-favoring plans.  


<p style="text-align:left;">
<a href="./metagrid" class="previous" style="padding: 10px 20px">&laquo; Go back to statistical techniques on the 5x5</a>
<!-- <span style="float:right;"><a href="./metagrid-3" class="next" style="padding: 10px 20px"> Check out sampling on the 7x7 grid &raquo;</a></span>
 -->
</p>




<center>
<hr style="width:50%; margin:15px auto 15px auto">
<div style="width: 70%; font-size: .7em; line-height: 1.1em">

Thanks for reading! Questions and comments can be directed to the authors at <a href="mailto:info@zachschutzman.com">info@zachschutzman.com</a>.<br/>
Source code for all of the components here can be found in <a href="https://github.com/zschutzman/zschutzman.github.io/tree/master/metagraph"> this GitHub repository.</a>

</div>
<hr style="width:50%; margin:15px auto 15px auto;">


</center>




<div style="text-align:right; color:#888888;line-height:14px" width="100%"><small>
<hr style="width:100%">

This page developed from a project at the<br/>
<a href="http://gerrydata.org">Voting Rights Data Institute</a>,
Summer 2018 and is joint with<br/>
Seth Drew, Eugene Henninger-Voss, Amara Jaeger, and Heather Newman.<br/>
Special thanks to Mira Bernstein, whose <a href="https://docs.google.com/spreadsheets/d/1U8XXRwwJ3zLLu9Xx-xsrePBFsCXkYYFj_MB4t-ZaZ4k/edit#gid=2131508220">Liliputia project</a> served as inspiration.<br/><br/>

Version 1.0<br/>
August 13, 2018<br/>


</small>
</div>



<!-- 
<span style="color:#857ab8"><b>Purple</b></span>
<span style="color:#fca336"><b>Orange</b></span>
<span style="color:#99CC9A"><b>Green</b></span>
<span style="color:#66ABFF"><b>Blue</b></span>
-->