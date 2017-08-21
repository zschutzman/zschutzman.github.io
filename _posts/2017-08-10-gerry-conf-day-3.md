---
layout: post
title:  "Gerrymandr - Day 3"
date:   2017-08-10
tags: research math personal
mathjax: true
author: Zach
---



This week, I am at the [Metric Geometry and Gerrymandering Group](sites.tufts.edu/gerrymandr)'s conference/workshop in Somerville, and, given my poor level of information retention from EC earlier this summer, I wanted to take a more deliberate approach to absorbing and processing the information that's being given to me this week.  I'm taking notes during the talks and I've decided to write these blog posts to reflect on each day of the conference, for both my benefit and yours, dear reader.

----


Day Three was (unsurprisingly) excellent.  I made a stronger effort to interact more with other people approaching gerrymandering from a computational and mathematical approach.  One thing that has been difficult with my research thusfar is that I haven't been able to pin down a nice juicy research problem.  Part of that is just my own lack of expertise and not feeling comfortable attacking a problem which has aspects (law, sociology, politics) that I am unequivocally not well-versed in.  The other part has been that I haven't been able to interact with other math/CS professionals who have spent time thinking about this problem in a research capacity.  Getting to do that has helped me develop a whole menu of ideas, as well as some excellent contacts and potential research collaborators across the country.

----

As before, I'll give a brief blurb for each talk, along with a link to my notes and the video of the talk (if available).

### 1. Talk 1: Guy-Uriel Charles on A Legal and Conceptual Primer for Redistricting
{: style="color:#800000;" :} 

Guy is a law professor, and approached the problem of redistricting from a more judicial standpoint, in contrast to the civil rights-focus of Kristen's talk on the first day and the historical lens of Ellen's talk on the second.  Guy layed out the constitutional framework under which redistricting cases are justiciable, and picked apart the judicial rationale for the opinions in *Bandemer* and *Vieth*, two important redistricting cases the Supreme Court heard.  He also described some of the differences between the judicial approach to political and racial gerrymanders. Weighing in on a perceived political gerrymander could be seen as an infringement on a state's right to structure the legislature and a clear case of judical overreach, while there are constitutionally-based arguments that racial gerrymanders violate guaranteed rights and federal law, like the VRA.   [Link to Zach's Notes](http://zachschutzman.com/assets/notes/mggg.pdf#page=21) \| [Link to Video of the Talk](https://www.youtube.com/watch?v=UBt6bBgcwxI&index=12&list=PLr7G5jnVFYLiTpEiQkQB_FyQ372oSO8Au)

### 2. Talk 2: Robert Cheetham on DistrictBuilder
{: style="color:#800000;" :} 

Robert is the CEO of Azavea, a GIS software engineering B-corporation in Philadelphia.  His talk was a presentation of a tool called DistrictBuilder they built a few years ago.  DistrictBuilder is free and open source (and available on Github somewhere...) and allows users to draw their own legislative maps while being able to see live statistics about their plan.  The software was used for a few redistricting contests, notably one in Virginia where the contestants' maps were used as part of a suit against the state for gerrymandering, and here in Philly where active citizens using the tool were able to get the legislature reengaged in drawing more representative districts. [Link to Zach's Notes](http://zachschutzman.com/assets/notes/mggg.pdf#page=23) \| [Link to Video of the Talk](https://www.youtube.com/watch?v=CqzU_tyGv8o&index=13&list=PLr7G5jnVFYLiTpEiQkQB_FyQ372oSO8Au)


### 3. Talk 3: Justin Solomon on Computational Geometry
{: style="color:#800000;" :} 

Justin is a computer scientist at MIT EECS and he does things in the realm of computational geometry.  Since redistricting has an inherent geometric component, the expertise of geometers may be useful in the problem.  To begin with, most reasonable framings of the redistricting problem are at least NP-Complete.  Additionally, some formulations of the problem look like problems for which there does not exist a good polynomial time approximation (unless $P=NP$).  Therefore, we need to be a little more creative with our approach.  Additionally, since we are working with highly numerical information in practice, we also have to worry about issues like measurement precision of the data and arithmetic underflow.  There are a number of open problems in this area which I am excited to try to tackle.  [Link to Zach's Notes](http://zachschutzman.com/assets/notes/mggg.pdf#page=24) \| [Link to Video of the Talk](https://www.youtube.com/watch?v=HJIAhW1FIZ0&index=14&list=PLr7G5jnVFYLiTpEiQkQB_FyQ372oSO8Au)


### 3. Talk 4: Nestor Guillen and Justin Solomon on Optimal Transport
{: style="color:#800000;" :} 

This talk was very mathematical and it went very quickly, so I'm not sure I'm in an excellent position to give a good summary, but here we go.  Optimal transport is a topic in mathematics/statistics/physics/computer science which addresses problems of the flavor "If I have X cannonballs scattered on the ground and they need to be brought to Y different cannons, what is the most efficient way of moving them?"  There are discrete and continuous versions of this problem, but for redistricting, we are interested in a model where we allocate parcels of land (a continuous thing) into a fixed number of districts (a finite and discrete number of things).  It turns out this problem looks a lot like linear programming, which means that there is a nice correspondence between this approach and other optimization techniques.  At this point, it is unclear how or if optimal transport will be useful in the redistricting problem, but according to Nestor and Justin (experts), it is certainly an area worth exploring.  [Link to Zach's Notes](http://zachschutzman.com/assets/notes/mggg.pdf#page=26) 

