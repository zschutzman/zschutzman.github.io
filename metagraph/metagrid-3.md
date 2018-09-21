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

<center>
<h2> Once again, welcome back to Gridlandia!</h2>
<br/>
<p align="center">
  <img width="200"  src="imgs/blankgrid7.png?raw=true"><br />
</p>
</center>

Once more Gridlandia has gotten a little bigger, and now our task is to examine drawing seven connected, equal-size districts (we're going to skip the 6x6 grid because we don't want to have to worry about ties).  We'd like to be able to do a similar analysis as in the 5x5 case, where we can examine a proposed plan and a distribution of voters to see if there is evidence that the plan was intentionally selected to favor or disfavor one of the parties.  This time, however, we don't have a full enumeration of all of the legal plans. We know that [there are 158,753,814 of them](http://oeis.org/A172477), and even with a careful encoding scheme, a file containing all of these would be a couple of gigabytes.  But this is okay!  If we have trouble writing down all of the legal districtings of a 7x7 grid, there is no way we'll be able to do such a thing for a real jurisdiction, so we can use this as an opportunity to develop some *sampling techniques*.


How do we generate a random sample of plans?  There are two really simple techniques which are terrible on their own, but when combined become very powerful.  The first is to have a computer randomly generate labellings of the cells and keep the ones which satisfy the criteria for being legal districting plans.  What's great about this is that it truly generates a random sample of districting plans, in that it has the same probability of generating every possible plan.  What's not so great is that this probability is extremely tiny.  While there are a very large number of legal plans, there are way, way, way more labellings than legal plans -- about 10^33 of them.  Even if we had a computer that could generate 1,000 labellings per second, we'd be well beyond the death of the Sun before it found a legal districting plan.

The second strategy is to use a human to draw plans.  This has the advantage of not wasting time drawing and checking labellings which are not legal plans.  The downside is that, in the grand scheme of things, humans are pretty slow at this task.  Some of our brave researchers tried to write down all of the legal plans for the 4x4 grid and, although they succeeded, it did take a few hours of time.

How can we combine these?  What we can do is *start with a human-drawn plan*, then use a computer to *randomly modify it*.  Remember when we defined two plans to be *adjacent in the metagraph* if we could transform one into the other by swapping two cells in adjacent districts?  Since there are only about 2,500 ways to randomly pick a pair of cells to try to swap, a computer can very easily move from one plan to the next, which is exactly what is happening in the animation below.  Every half-second, an algorithm randomly picks two cells and checks if exchanging their labels yields a legal districting plan.  If so, it moves to that plan.  If not, it tries again.


<div id="randomwalk" style="display: block; margin: auto; text-align:center"></div>

We are doing a *random walk* on the metagraph.  Each plan is a node in the metagraph and is adjacent to other nodes.  Every second, the walk takes a random step to one of the neighbors of the current plan.  This algorithm is remarkable for three important reasons.  The first is its simplicity -- the demo above is running live off of about 50 lines of JavaScript, in your browser, right now.  The second is the effectiveness and speed.  While it would take a long time to enumerate *all* of the legal districting plans, we can definitely enumerate a huge chunk of them very quickly.   The third is its adaptability for optimization, which we'll discuss a little later.

This kind of sampling algorithm is called a **Markov chain Monte Carlo** method, or MCMC for short. These are incredibly powerful tools for sampling, approximation, and optimization in settings where it is difficult to get your hands on the object you're interested in, such as the space of all legal districting plans.


Once again, you can pick your own distribution of voters.  You can design a plan by clicking and right-clicking the cells to change their district assignment, or press the 'Random Plan' button to have the random walk choose one for you.  Once you have a valid plan, press the green 'MCMC Sampler' button to generate a histogram.  The <span style="color:#66ABFF"><b>Blue</b></span> bar represents the number of seats your distribution of voters the <span style="color:#857ab8"><b>Purple</b></span> Party wins under your selected plan, and the histogram bars show the seat shares for a sample of 1,000 plans generated by the MCMC random walk.  If the <span style="color:#66ABFF"><b>Blue</b></span> bar is to the left of most of the mass of the histogram, it means that the nearby sample found a lot of plans that gave more seats to the <span style="color:#857ab8"><b>Purple</b></span> Party than yours.  If the <span style="color:#66ABFF"><b>Blue</b></span> bar is to the right of most of the mass, it means that the sampler found a lot of plans which give more seats to the <span style="color:#fca336"><b>Orange</b></span> Party than yours.


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
