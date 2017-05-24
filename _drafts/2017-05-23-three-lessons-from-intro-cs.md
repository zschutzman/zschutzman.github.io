---
layout: post
title:  "Three Lessons from Being an Intro CS TA"
date:   2017-05-22
tags: teaching undergrad
mathjax: true
author: Zach
---

This fall, I will be a teaching assistant for [NETS 112](cis.upenn.edu/~mkearns/teaching/networkedlife), a gateway course which is basically a mathematical treatment of some of the foundational concepts of social networks.  The course is open to students of all levels, but it is designed primarily for first-years.  I'm planning to spend some time this summer preparing a little bit for this role, as I've never formally taken a course covering this material.
'
Going over some notes from my Mathematical Reasoning course (I CAN'T BELIEVE I TOOK THAT ALMOST FOUR YEARS AGO!) has reminded me of some of the things I learned from TA'ing Colby's gateway computer science course, Computational Thinking (CS151/152).  I took the course myself and served as a lab TA for three more iterations of the course, so I figured I'd share some of the things I learned from that role.

----

### 1. Intro CS is just problem-solving in front of a screen. 
{: style="color:#800000;" :} 

At the introductory level, there are two important skills to learn: programming and problem-solving.  In a way, these skills are parallel but independent.  Problem-solving is about how to go from Point A to Point B and programming is about constructing a sequence of unambiguous instructions to complete a task.  Computational thinking is really just using those unambiguous instructions to solve problems.  Frequently the best way to help a student with their work was to step away from the computer and have them draw some pictures or use English sentences to describe how they would solve the problem, then translate that work into a programming language.

### 2. Lots of students start under the impression that computers are magic.  They most certainly are not. 
{: style="color:#800000;" :}

 Students who have never programmed before often end up frustrated that their code doesn't do what they want it to. Computers are *exceptionally bad* at a lot of things, including interpreting your intentions; they just follow the instructions you give them.  You can't tell the machine to "move the cursor to coordinate (x,y)" without first making sure it knows *how to move the cursor* **and** that it has *knowledge of the coordinate system*.  

### 3. Everybody's intuition works differently.
  {: style="color:#800000;" :}

I was working with a student who was having trouble with a task involving storing various pieces of information in some lists.  We stepped away from the computer and talked through how we might solve the problem by hand, and she very quickly came up with an excellent solution to the problem, but still struggled with implementing it in code.  She asked me if she could rename the variables from `list1`, `list2`, etc. to `bucket1`, `bucket2`, etc.  After doing this, programming the solution to the problem was more intuitive and she easily completed the task.


