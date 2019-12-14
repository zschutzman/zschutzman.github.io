---
layout: post
title:  "Fair Algorithms for Learning in Allocation Problems"
date:   2018-10-25
tags: research, computer science, machine learning, fairness
mathjax: true
permalink: /blog/fat19-fairalloc
summary: >
    A quick summary of our paper in FAT* '19, joint with Hadi Elzayn, Shahin Jabbari, Chris Jung, Michael Kearns, Seth Neel, and Aaron Roth!
---

Our paper was accepted into the ACM conference on Fairness, Accountability, and Transparency (abbreviated "FAT\*", pronounced "fat star") which will 
be in Atlanta in January. While I'm not *thrilled* about spending my birthday in the Philadelphia airport, it could be much worse.  This is my second 
publication and my third paper (number 2 was rejected (twice)...). I'm happy this got in before the holidays, because I think it's much easier to explain 
to my family than the [[strategic classification]](../blog/ec18-stratclass) one.  Big thanks and congratulations to my coauthors Hadi Elzayn, 
Shahin Jabbari, Chris Jung, Michael Kearns, Seth Neel, and Aaron Roth.

In the paper, we think about a setting where you want to allocate some resource across several different groups. In each of these groups, there are 
some people which we call *candidates* who we want to receive the resource and a bunch of *non-candidates* who we don't.  We can think of the resource 
as scholarships and the candidates as high academic achievers, or loans and creditworthy individuals.  The problem is that we don't know how many 
people in each group are actually candidates for the resource, and even worse, this number might change over time.  Formally, we think of this 
number as being drawn from a *distribution* for each group at each time step.

We'd like to know something about these distributions, so we need a model for learning about them.  In our setting, the way we learn something about 
a group's distribution is by allocating some of the resource to that group and discovering how much of that resource actually went to the candidates.  
We look at a few different versions of this discovery function.  The next hiccup is that we want to learn enough about these distributions for our 
allocation to be *fair*, meaning that a candidate's probability of receiving the resource doesn't depend on which group they belong to.  It would be bad 
if, for example, there were two equally qualified students at different schools and one had a much better shot of getting a scholarship just based on which 
of the two schools they attend (and this *definitely* isn't a problem in real life...).

The thing to worry about is learning too much about one distribution. If we got really lucky one day and found a lot of candidates in one group, we might 
be tempted to send a lot of our resource there in the future and perhaps not learn anything about any of the other distributions.  We want our algorithm to 
both find a lot of candidates while also learning enough about every distribution to be confident that it's not being unfair.  In the paper, we give such an 
algorithm, and it's actually a pretty natural one.  If you use some statistical tools to keep careful track of *estimates* for the distribution of candidates 
in each group and, at each time step, give an allocation to each group which is fair *with respect to those estimates* you get both of these properties.  We 
show that this converges to a fair allocation in expectation and run some experiments on the Philadelphia Crime Dataset which show that it converges pretty quickly.  

Check out the paper on the arXiv [here](https://arxiv.org/abs/1808.10549).