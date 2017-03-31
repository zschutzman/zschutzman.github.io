---
layout: post
title:  "Euler's Theorem (but which one?!)"
date:   2017-03-30
categories: math, research, education, graph theory
mathjax: true
---

(spoiler alert: it's the planar graph one)


I've been thinking a lot about *planar graphs* because they've come up in a research problem I've been working on.  This reminded me of one of the first theorems we proved in my Mathematical Reasoning course.  Plus, this is a good excuse to try out some $$\TeX\ $$ on the new blog.

---

Before we get to the math, let's think about this problem: there is a street with three houses which need to be connected to the three utilities *gas*, *electricity*, and *water*.  Fortunately, there are stations for all three of these immediately across the street from the houses.  You've been asked to figure out how to place the pipes and wires to connect each house to all three utilities.  But there's a catch: none of the pipes and wires can pass over or under each other, because it makes repair access difficult.  You also can't bridge utilities from one house to another; each house must be connected directly to the station.  How do you do it?  Is it even possible?

{% include image.html
            img="images/blogposts/utility-small.png"
            title="The Utility Graph"
            caption="We have all three utilities at the Red and Green houses, but can we get Water to the Pink house?" %}




Now, some math.  First, a graph is a mathematical object.  I'll denote it $G$.  A graph has a set of *vertices* $V$ and *edges* $E$.  Each edge connects two vertices, which are not necessarily distinct.  It is perfectly legal for an edge to connect a vertex to itself. We can also have graphs that have multiple edges between the same pair of vertices.

A graph $G$ is called *connected* if, for any two vertices in $V$, there is some sequence of edges in $E$ which create a path between the two vertices.  A graph is *planar* if it can be drawn in the plane without any of its edges intersecting.  Not every graph is planar.  In the following graph, each of the vertices on the left is connected to all of the vertices on the right, and vice versa.  This is called the *complete bipartite graph* $K_{3,3}$.  It is not planar.  There is no way to draw it on a piece of paper without having edges cross each other, so it actually is impossible to connect the houses to the utilities without crossing the pipes and wires.

Planar graphs have one more piece to talk about: *faces*.  A face of a planar graph is an area completely enclosed by edges.  As a matter of convention, we consider the area 'outside' of the graph to be a face as well.  If you draw a square on a piece of paper, that is a planar graph.  There are four vertices and four edges and two faces (the inside and the outside).  A pentagon has five verties, five edges, and two faces.  If you draw an *X*, that is also a planar graph with five vertices: the four endpoints of the strokes and the intersection.  The *X* graph has four edges and only one face.  Notice a pattern?  In all three of these examples, the number of vertices minus the number of edges plus the number of faces is two $$(\abs{V}-\abs{E}+\abs{F}=2)$$.  It turns out, this is true for all connected planar graphs.

You can even draw a random squiggle and see that it holds.  Anywhere it crosses itself is a vertex, the edges are the segments between vertices, and the faces are the enclosed regions and the outside.

This is Euler's Theorem (for planar graphs).  Just trying it on a bunch of cases isn't enough to show it's true; we need to prove it.

----

We will prove this by induction. Unlike a usual proof by induction where we might want to induct on the number of vertices or edges, we're actually going to induct on the number of *faces*.  

As a base case, consider a connected planar graph with only one face (the outside).  These graphs (sometimes called *trees*) have some number of vertices $\abs{V}$ and exactly $\abs{V}-1$ edges.  Trees have one face, hence we have $\abs{V} - (\abs{V}-1) + 1  = 2$ as we want.

Now for the inductive step: assume that $\abs{V}-\abs{E}+\abs{F}=2$ holds for $\abs{F}=k$.  We will show that it holds for $\abs{F} = k+1$.  Consider a connected planar graph with $k+1$ faces.  Since it has more than one face, there must be some enclosed region that isn't the outside face.  If we delete an edge adjacent to this face, we lose one edge and one face, because our region now merges with the one adjacent to it.  By our inductive hypothesis, this new graph after deleting the edge satisfies $\abs{V}-\abs{E}+\abs{F}=2$. Putting that edge back in adds an edge and a face, so $\abs{V}-\abs{E}+\abs{F}=2$ holds on the original graph.

Hence by induction on $\abs{F}$, Euler's Theorem for connected planar graphs holds.

----


