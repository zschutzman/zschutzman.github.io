---
layout: post
title:  "An Incorrect Conjecture and a Theorem From Graph Theory"
date:   2017-12-10
tags: math, graph theory, proof
mathjax: true
author: Zach
---

Last week, I casually asked a few of my colleagues about a little graph theory conjecture I had.  It took me about five minutes to disprove it when I got back to my desk, but interestingly enough something similar to the *converse* of the statement *is* true (and a stronger version of it, to boot!).  Two of my favorite things about graph theory are that a counterexample to show a statement is false is often easy to cook up, and the proof that a statement is true is often extremely cute, and this fun little adventure illustrates both of them.

Before we start doing math, we need a few definitions.

An undirected graph G is *connected* if there exists a path between any pair of vertices
A directed graph G is *weakly connected* if there exists a path between any pair of vertices *which can follow arcs in either direction*.
A directed graph G is *strongly connected* if there exists a path between any pair of vertices *which only follows arcs in the forward direction*.

The *in-* and *out-* degrees of a vertex in a directed graph is the number of arcs into and out of that vertex, respectively.

Now, here is my (definitely false) conjecture:
<div class="conjecture">
If a directed graph is strongly connected and every vertex has out-degree k, then every vertex must have in-degree k.
</div>

**Disproof**: Here's a picture!





<p align="center">
  <img width="300"  src="../../../assets/images/12-11-grth/counterex.jpg?raw=true"> <br />

	<font size="3"> A counterexample </font>
</p>
<div style="text-align: right"> &#9724; </div>




Okay, well, that's math for you.  Sometimes you come up with problems that are too hard to solve, sometimes you come up with problems that are too easy to solve, and sometimes you come up with silly problems.  Fine.  However, there is a *very similar* statement which actually is true. 

<div class="theorem">
Theorem: If every vertex in a directed graph has in-degree equal to its out-degree, then it is weakly connected if and only if it is strongly connected.
</div>

**Proof:**
We'll start by noting that any graph which is strongly connected must also be weakly connected, so that part of the statement isn't really interesting.  What we need to do some work to show is that if every vertex of G has its in-degree equal to its out-degree and $G$ is weakly connected, then $G$ is also strongly connected.


We'll proceed by contradiction.  Suppose that every vertex has in- and out-degree equal to each other and that G is weakly, but *not* strongly connected.  Let's first observe that strong connectivity is an equivalence relation on the vertices of a graph, which we will quickly verify:
- Reflexivity: any vertex is vacuously strongly connected to itself by the 'empty' path.
- Symmetry: If $u$ and $v$ are strongly connected, then there exists a path following arcs from u to v and from v to u, but this is exactly the same as saying that $v$ and $u$ are strongly connected.
- Transitivity: If $u$ is strongly connected to $v$ and $v$ is strongly connected to $w$, we  can find a $u$-$w$ path following arcs by just concatenating the $u$-$v$ and $v$-$w$ ones.  Similarly, to get a $w$-$u$ path, we can follow the $w$-$v$ path then the $v$-$u$ path.


Since this is a proper equivalence relation, it induces a partition on the vertices, and since we've assumed that G is not strongly connected, it must partition the vertices into at least two nonempty components.  This graph does not satisfy the requirements we have on in- and out-degrees, but it is weakly, but not strongly, connected, and the partition into strongly connected components is shown.


<p align="center">
  <img width="300"  src="../../../assets/images/12-11-grth/vertswarcs.jpg?raw=true"> <br />

	<font size="3"> A weakly connected directed graph</font>
</p>

Now, let's make a new graph D with vertices $d_1, d_2, \dots d_m$, one for each chunk of the partition of the vertices of $G$.  $D$ will be a directed graph, and there will be an arc from vertex $d_i$ to $d_j$ if and only if there is some arc in $G$ which goes from a vertex in the chunk corresponding to $d_i$ to one in the chunk corresponding to $d_j$.  Here's a picture of this construction applied to the graph above.


<p align="center">
  <img width="300"  src="../../../assets/images/12-11-grth/conncomps.jpg?raw=true "> <br />

	<font size="3"> The transformation applied to the above graph </font>
</p>


D has to be connected because $G$ is weakly connected. Also, $D$ cannot have any cycles!  If it did, say $d_i$ and $d_j$ were on some cycle, then we must be able to find a path from any vertex in the $d_i$ chunk of $G$ to one in the $d_j$ chunk *and back in the other direction*.  This is because each chunk is strongly connected, so we can make the path by concatenating the path to the 'exit' vertex of $d_i$, then the arc out of $d_i$,and so on, until we get to $d_j$, then following a path to the target vertex, and the same for the other direction.  The problem here is that we assumed that we had properly partitioned the vertices into strongly connected components, and this process shows that the $d_i$ chunk and $d_j$ chunk should be the same, but we've defined them to be different.

Okay, so $D$ is a directed graph  with no cycles, so what?  Well, a directed, acyclic graph *must* have at least one vertex with in-degree zero.  This vertex, let's call it $d_1$, presents a problem.  If  its in-degree is zero, its out-degree must be something non-zero, because $D$ is connected and has more than one vertex.  Back up in $G$, this means that there is at least one arc leaving the vertices in the $d_1$ chunk, but none coming in from any other chunks.  This means that the total out-degree of these vertices must be greater than the total in-degree.  But wait!  We assumed that every vertex had in- and out-degree equal, so this situation shouldn't arise.  Hence we have found our contradiction, and the theorem holds. 
<div style="text-align: right"> &#9724; </div>

So what's the takeaway?  Well, the theorem itself implies that when we are working with directed graphs where every vertex has in-degree equal to its out-degree, we don't have to worry about a distinction between strong and weak connectedness, and having fewer things to worry about is definitely something we should all want.  This is convinient for studying certain objects in algebraic graph theory, such as graph automorphisms, arc-transitivity, and flows and circulations.  

Also, sometimes when you're wrong you get to learn a new thing!


