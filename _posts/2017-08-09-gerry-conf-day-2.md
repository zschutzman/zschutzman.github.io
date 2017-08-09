---
layout: post
title:  "Gerrymandr - Day 2"
date:   2017-08-08
tags: research math personal
mathjax: true
author: Zach
---


This week, I am at the [Metric Geometry and Gerrymandering Group](sites.tufts.edu/gerrymandr)'s conference/workshop in Somerville, and, given my poor level of information retention from EC earlier this summer, I wanted to take a more deliberate approach to absorbing and processing the information that's being given to me this week.  I'm taking notes during the talks and I've decided to write these blog posts to reflect on each day of the conference, for both my benefit and yours, dear reader.

----


Day Two was just as much fun as Day One.  I'll say again, the best part of this thing is that I get to meet a broad range of people with extremely diverse interests and viewpoints.  Part of the mission of this conference is to work with educators on how to effectively teach and communicate the issues and challenges of gerrymandering, because as any political scientist will tell you, awareness of and engagement with technical policy issues is extremly low among the general population, and getting people to know about and understand an issue is the first step towards widespread support for reform.  Being able to think and talk about redistricting from the from the viewpoint of experts in complexity theory, middle school education, law, civil rights, mathematics, physics, statistics, urban planning, and software development has been really helpful for me to be able to frame the problem of gerrymandering in different ways, and I think that when I get back into research, I'll have a much better idea of how to navigate my work because I can take into account the multifaceted nature of the problem.

I also think I'd like to put together "An Interdisciplinary Primer on Redistricting" both for the benefit of myself and my research, but also to be a quick and simple resource for people interested in moving around throughout the very broad space that this problem sits in.

----

As with the previous post, I'll give a brief blurb for each talk, along with a link to my notes and the video of the talk (if available).

### 1. Talk 1: Ellen Katz on Race and Redistricting 
{: style="color:#800000;" :} 

Ellen is a legal scholar, and presented a modern history of court cases related to racial issues in voting rights and redistricting.  This talk is a nice companion piece to Kristen Clarke's talk from the previous day.  She really got at the legal precedent surrounding some of the subtleties of why gerrymandering is such a sticky legal issue, such as how we can discern between a plan which unfairly packs minorities and one which is fairly providing majority-minority districts.  [Link to Zach's Notes](http://zachschutzman.com/assets/notes/mggg.pdf#page=12) \| [Link to Video of the Talk](sites.tufts.edu/gerrymandr)

### 2. Talk 2: Megan Gall on Geographic Issues in Redistricting
{: style="color:#800000;" :} 

Megan is a GIS expert and works with legal scholars to do data analysis and produce maps related to redistricting.  While there are a number of criteria for redistricting, such as compactness and preservation f existing political borders, these are loosely defined, vague, and not always strictly applied.  Additionally, every state has different rules regarding how state and federal districts are drawn, and sometimes even within a state, the rules for drawing congresisonal districts are very different than the ones guiding the drawing of state districts.  As analysts, a major hurdle is getting good data.  Since election and voter data only exists down to a certain resolution, we need to use statistical methods to make inferences about how different groups of voters behave, as a claim of disenfranchisement which violates Section 2 of the VRA requires layers to be able to argue that an affected group *both* votes as a bloc *and* is not afforded proper representation. [Link to Zach's Notes](http://zachschutzman.com/assets/notes/mggg.pdf#page=14) \| [Link to Video of the Talk](sites.tufts.edu/gerrymandr)


### 3. Talk 3 and 4: Wendy Cho and Yan Liu on Computational Issues
{: style="color:#800000;" :} 

The morning talk was the "general audience" presentation and the afternoon was the more "technical" view of Cho and Liu's project which implements a massively parallel genetic algorithm for sampling from the space of redistricting maps.  In an ideal world, we could evaluate how good or bad a gerrymander is by using statistical tests to compare the map to a distribution of maps.  For example, if someone is claiming that their map is not a partisan gerrymander, but it looks a lot like a draw from the distribution over maps with a strong partisan bias, we may have evidence of intentional gerrymandering.  At a high level, the two major computational issues we have to deal with are that the actual space of maps that split a state into the correct number of contiguous districts is absolutely massive, and that picking the map which optimizes against some constraints and objectives is computationally very difficult.  Here we design a genetic algorithm which runs in parallel on a supercomputer to try to get a good sample of maps.  Genetic algorithms are nice because they run quickly and they don't require the designer to know a lot about what the sample space actually looks like.  The downside is that you can't prove a lot of things about how good the solution you get is, or how long it will take to find a good solution.  [Link to Zach's Notes](http://zachschutzman.com/assets/notes/mggg.pdf#page=17) \| [Link to Video of the Talk](sites.tufts.edu/gerrymandr)
