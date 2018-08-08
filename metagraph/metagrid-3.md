---
layout: default
customjs:
 - https://d3js.org/d3.v4.min.js
 - https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js
 - http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
 - mcmc-grid.js
 - randwalk.js
---



<!-- Once again, welcome back to Gridlandia!

***IMAGE***

Once more we've gotten a little bigger, and now our task is to examine drawing seven connected, equal-size districts.  We'd like to be able to do a similar analysis as in the 5x5 case, where we can examine a proposed plan and a distribution of voters to see if there is evidence that the plan was intentionally selected to favor or disfavor one of the parties.  This time, however, we don't have a full enumeration of all of the legal plans. We know that [there are 158,753,814 of them](http://oeis.org/A172477), and even with a careful encoding scheme, a file containing all of these would be a couple of gigabytes.  But this is okay!  If we have trouble writing down all of the legal districtings of a 7x7 grid, there is no way we'll be able to do such a thing for a real jurisdiction, so we can use this as an opportunity to develop some *sampling techniques*.


How do we generate a random sample of plans?  There are two really simple techniques which are terrible on their own, but when combined become very powerful.  The first is to have a computer randomly generate labellings of the cells and keep the ones which satisfy the criteria for being legal districting plans.  What's great about this is that it truly generates a random sample of districting plans, in that it has the same probability of generating every possible plan.  What's not so great is that this probability is extremely tiny.  While there are a very large number of legal plans, there are way, way, way more labellings than legal plans -- about 10^33 of them.  Even if we had a computer that could generate 1,000 labellings per second, we'd be well beyond the death of the Sun before it found a legal districting plan.

The second strategy is to use a human to draw plans.  This has the advantage of not wasting time drawing and checking labellings which are not legal plans.  The downside is that, in the grand scheme of things, humans are pretty slow at this task.  Some of our brave researchers tried to write down all of the legal plans for the 4x4 grid and, although they succeeded, it did take a few hours of time.

How can we combine these?  What we can do is *start with a human-drawn plan*, then use a computer to *randomly modify it*.  Remember when we defined two plans to be *adjacent in the metagraph* if we could transform one into the other by swapping two cells in adjacent districts?  Since there are only about 2,500 ways to randomly pick a pair of cells to try to swap, a computer can very easily move from one plan to the next, which is exactly what is happening in the animation below.  Every second, an algorithm randomly picks two cells and checks if exchanging their labels yields a legal districting plan.  If so, it moves to that plan.  If not, it tries again. -->



<div id="randomwalk" style="display: block; margin: auto; text-align:center"></div>

<!-- What's happening here is that we are doing a *random walk* on the metagraph.  Each plan is a node in the metagraph and is adjacent to other nodes.  Every second, the walk takes a random step to one of the neighbors of the current plan.  This algorithm is remarkable for three important reasons.  The first is its simplicity -- the demo above is running live off of about 50 lines of JavaScript, in your browser, right now.  The second is the effectiveness and speed.  While it would take a long time to enumerate *all* of the legal districting plans, we can definitely enumerate a huge chunk of them very quickly.   The third is its adaptability for optimization, which we'll discuss a little later.

This kind of sampling algorithm is called a **Markov chain Monte Carlo** method, and they are incredibly powerfull tools for sampling, approximation, and optimization in settings where it is difficult to get your hands on the object your interested in, such as the space of all legal districting plans.


<div id="gridspace" style="width:100% text-align:left"></div> -->


<!-- 
<span style="color:#b2abd2"><b>Purple</b></span>
<span style="color:#fdb863"><b>Orange</b></span>
<span style="color:#99CC9A"><b>Green</b></span>
<span style="color:#66ABFF"><b>Blue</b></span>
-->