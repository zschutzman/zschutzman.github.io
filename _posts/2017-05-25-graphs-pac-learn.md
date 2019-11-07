---
layout: post
title:  "Graphs are PAC-Learnable from Subgraphs"
date:   2017-05-25
tags: research math
mathjax: true
permalink: /blog/graphs-pac-subgraph
summary: >
    A result from Hadi's and my research project for Computational Learning Theory, and an excuse to practice $\rm\LaTeX$ for the website.
---

This semester I took a course on Computational Learning Theory, which deals with the statistical and computational underpinnings of machine learning.  As part of our final project, Hadi Elzayn and I proved that graphs are Probably-Approximately Correct (PAC)-learnable from labeled supergraph/subgraph examples in polynomial sample complexity.  Here's a presentation of that proof as well as a fun little way of trying out $\TeX$ on the blog.

----


## Positive Examples are Supergraphs

We first consider a setting in which the Learner wishes to learn a graph $G$  on some vertex set $V=\\{v_1,v_2,\dots,v_n\\}$.  That is, the number of vertices is initially known, but the edges are initially unknown.  Observe that if $n$ is the number of vertices in the graph, our concept class contains $O(2^n)$ possible graphs, as we have each of the $\binom{n}{2} =\frac{n^2-n}{2}$ edges either present or absent in the true graph $G$.  Let $\mathcal{D}$ be some arbitrary distribution over all possible graphs on the vertex set $V$.  Let $EX(c,\mathcal{D})$ be a sampling oracle which returns a graph $G'$ and a label $y$, where $y=1$ if $G'$ is a supergraph of $G$ and $y=0$ if $G'$ is not a supergraph of $G$.  In other words, $y$ represents the answer to the question 'Does $G'$ have at least every edge that is in $G$, and maybe some extras?'  We claim that $G$ is $(\epsilon,\delta)-$PAC learnable from $EX(c,\mathcal{D})$ with sufficiently many examples $m$, and that $m$ is only polynomial in $\epsilon$, $\delta$, and the number of vertices in the graph $n$.







Trying to learn from supergraphs might feel a little contrived, and admittedly it is.  It might be a more natural question of whether $G$ can be PAC-learned from examples which are its subgraphs.  We start with supergraphs because there is an elegant and straightforward reduction from a problem that is known to be PAC-learnable to the supergraph case, and after showing this correspondence, the claim that $G$ is learnable from subgraphs under the same conditions will follow easily.







<div class="theorem">
Given error parameter $\epsilon$, confidence parameter $\delta$, a vertex set $V$, and an example oracle $EX(c,\mathcal{D})$, we can PAC-learn a graph $G$ from supergraphs using only positive examples with sample complexity polynomial in $\frac{1}{\epsilon},\frac{1}{\delta},$ and the number of vertices in $G$.
</div>


At a high level, our algorithm will start with the hypothesis $h=K^n$, the complete graph on $n$ vertices. That is, we assume that $G$ contains every possible edge. When we see a positive example $x$ from $EX(c,\mathcal{D})$, we delete from $h$ those edges not present in $x$.  We do this sufficiently many times to ensure we have error less than $\epsilon$ with probability at least $1-\delta$.


<div class="lemma">
We never delete from $h$ any edge actually present in the true $G$.
</div>

To see this, consider the condition for deleting an edge.  We only delete an edge if we see a positive example $x$ where that edge is not present.  Since the example is positive, it contains at least all of the edges that $G$ does, so $G$ certainly cannot contain any edge *not* present in $x$.  We therefore know that our hypothesis $h$ will always be a supergraph of the true graph $G$.

This is starting to feel a little bit like learning a monotone boolean conjunction.  We will show at the end of this section the explicit reduction which demonstrates that this is *exactly equivalent* to learning a monotone boolean conjunction, but for now, we proceed with the proof.

Let $e$ be some possible edge, and denote $p(e)$ the probability that $e$ gets deleted from $h$ as a result of seeing some positive example from $EX(c,\mathcal{D})$.  Note that for all $e$ in the true graph $G$, $p(e)=0$, as we showed above that we will never remove such an edge from $h$.


<div class="lemma">
The error of $h$, that is the probability that $h$ contains at least one edge not present in $G$ (equivalently, the probability that $h\neq G$) is upper-bounded by the sum of the $p(e)$ over all possible edges.
</div>


To see this, consider an edge $e$ which is in $h$.  Suppose $EX(c,\mathcal{D})$ gives us a positive example in which $e$ is not present. Since $e$ is in $h$ but is not in $G$, $h$ makes an error on that edge $e$.  We call $p(e)$ the probability that $e$ causes $h$ to make such an error, so $\sum\limits_{e\in G}p(e)$ must be an upper-bound on the error of $h$.

Call an edge *bad* if $p(e)\geq \frac{e}{\|E\|}$.


<div class="lemma">
If $h$ has no bad edges, then the error of $h$ is less than $\epsilon$, as desired.
</div>


This follows directly from the previous Lemma.

We now need to show that we can achieve such a low error hypothesis with high probability.  What is the probability that a bad edge survives $m$ positive examples?  The probability that it survives any one draw is 

$(1-p(e))\leq (1-\frac{\epsilon}{\|E\|})$

Then the probability that it survives $m$ draws is at most $(1-\frac{\epsilon}{\|E\|})^m$

In the worst case, every one of the $\|E\|$ edges is bad, so the probability that any bad edge survives $m$ draws is at most $\|E\|(1-\frac{\epsilon}{\|E\|})^m$.  We want to choose $m$ large enough to make this smaller than $\delta$.  Using Hoeffding's Inequality and some basic algebra, we get 

$m\geq \frac{\|E\|}{\epsilon}(\ln{\|E\|}+\ln{\frac{1}{\delta}})$

We have $m$ polynomial in $\|E\|$ (which is itself polynomial in the number of vertices in $G$), $\delta$, and $\epsilon$, hence graphs are efficiently PAC-learnable from supergraphs. $\square$

## The Same As Conjunctions

This proof almost exactly followed the proof in Kearns and Vazirani of boolean conjuctions being efficiently PAC-learnable.  In fact, everything from the structure to the sample complexity bound carries through because learning a graph from supergraphs is equivalent to learning a boolean conjunction from positive examples.

Let $e_{ij}$ be a possible edge in $G$, and let $x_{ij}$ be the boolean variable which takes on the value $1$ (or true) when $e_{ij}$ is actually an edge in $G$ and $0$ (or false) otherwise.  Then a graph is just a conjunction over the positive instances of the literals corresponding to edges in the graph.  Deleting edges when they do not appear in a supergraph is equivalent to deleting literals which are $0$ in a positive example.

From here, it should be simple to see how we can learn a graph $G$ from positive examples which are subgraphs of $G$, simply by considering the negation of the previous problem.

## Positive Examples are Subgraphs

In this version of the problem we begin with $h$ as the graph on $n$ vertices with no edges.  When we see a positive example $x$, we add to $h$ every edge in $x$.  The same proof carries through.  At all times, $h$ is a subgraph of the true graph $G$, we define $p(e)$ as the probability of *not* adding an edge to $h$ which is truly present in $G$.  Since we only ever add edges we are certain are in $G$, $p(e)$ for any $e\notin G$ is zero.  A *bad edge* is now one with probability greater than $\frac{\epsilon}{\|E\|}$ of not appearing in any positive example, and the proof of the sample complexity is identical.

This situation works because whereas learning from supergraphs was like learning a monotone conjunction over positive instances of literals, learning from subgraphs is like learning from negative examples of literals.  We start with the hypothesis ''$e_1$ is not in $G$ and $e_2$ is not in $G$ and ...'' and as we see examples, we remove these literals until we get as our hypothesis a conjunction corresponding to the edges we are confident are not in $G$.  From here, it is easy to see how to move back and forth between a hypothesis consisting of edges we think are not in a graph and a hypothesis consisting of edges we know are in the graph.   Hence graphs are also PAC-learnable from subgraphs.




