---
layout: post
title:  "Strategic Classification from Revealed Preferences"
date:   2018-04-23
tags: research, computer science, machine learning, game theory
mathjax: true
permalink: /blog/ec18-stratclass
summary: >
    A brief overview of our paper in EC '18, joint with Jinshuo Dong, Aaron Roth, Bo Waggoner, and Steven Wu!
---

Our (Jinshuo Dong, Aaron Roth, myself, Bo Waggoner, and Steven Wu) paper *Strategic classification from revealed preferences* was just accepted at [EC '18](http://www.sigecom.org/ec18/)!  Not only is it exciting that our work is being published, but this is also *my first publication* which, I think, officially makes me *an academic*.  At the very least, my [Erdős number](https://en.wikipedia.org/wiki/Erd%C5%91s_number) is **4**.

Our paper examines a setting in which *self-interested agents* interact with a *machine learning model*.  Imagine you are designing a filter for an email system.  There are two kinds of emails that might be sent: legitimate 'non-spam' messages which you want to pass through the filter, and spam messages which you would like to block.  The challenge comes from how spammers and non-spammers respond differently to the filter system.  A non-spammer does not think about her message as being caught by a filter, so she does not carefully craft her emails to skirt your system.  In other words, she sends exactly the message she would like to send.  Spammers, on the other hand, are aware of the filtering system and have to tweak their emails to evade your filter.  The spammer has a message he would *like* to send, but he may have to modify it in order for it to pass through the filter.  We model this change as incuring a cost to the spammers.

We consider this problem in an *online* setting.  At each time step, you publish your spam filter, and you observe whether you correctly or incorrectly labelled a message sent to your system.  You then get to adjust your filter.  At the surface, this problem is really, really, really hard to solve.  We only get to see the messages the spammers actually *send*, rather than the ones they *wanted to send*, and we don't get to see the cost function a spammer used to inform his best-response to our filter.  At the core, we want to deploy the spam filter which minimizes our classification error *subject to the spammers trying to maximize our error on their examples*.

In the paper we do two things: first, we demonstrate sufficient conditions for the optimization problem of choosing the best spam filter to be convex.  Second, we present a modification of an existing optimization algorithm which gives us a *no-regret* online learning algorithm to deploy a sequence of filters.  The paper is pretty technical, but if you're interested, you can check out a preprint from the fall [here, on the arXiv](https://arxiv.org/abs/1710.07887).  For a precise, but less technical overview, we have a three-page 'extended abstract' [here](http://zachschutzman.com/assets/papers/stratclass_nips.pdf), which appeared at the [Workshop on Learning in the Presence of Strategic Behavior](http://www.cs.cmu.edu/~nhaghtal/mlstrat/) at NeurIPS '17.
