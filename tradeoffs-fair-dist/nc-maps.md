---
layout: default
title: North Carolina | Trade-offs in Fair Redistricting
permalink: /tradeoffs-fair-dist/nc-maps/
order: 7
customjs: 
- https://d3js.org/d3.v5.min.js
- https://unpkg.com/leaflet@1.5.1/dist/leaflet.js
- ../nc_data/nc_0.geojson
- ../nc_data/nc_1.geojson
- ../nc_data/nc_2.geojson
- ../nc_data/nc_3.geojson
- ../nc_data/nc_4.geojson
- ../nc_data/nc_5.geojson
- ../nc_data/nc_6.geojson
- ../nc_data/nc_7.geojson
- ../nc_data/nc_8.geojson
- ../nc_data/nc_9.geojson
- ../nc_data/nc_10.geojson
- ../nc_data/nc_11.geojson
- ../nc_data/nc_12.geojson
- ../build_nc_maps.js
invisible: true
---

<link rel="stylesheet" href="../leaflet/css/leaflet.css">
<link rel="stylesheet" href="../leaflet/css/qgis2web.css"><link rel="stylesheet" href="../leaflet/css/fontawesome-all.min.css">
<style>
    .map {
        width: 500px;
        height: 300px;
        display: inline-block;
    }
    .plot {
        width: 300px;
        height: 300px;
        display: inline-block;
    }
    .parent {

    }
    .scoreblock {
        width: 300px;
        display: inline-block;
    }
</style>

[**Go Back**](..)


<h2 style="margin-bottom: 7px; margin-top:10px" >North Carolina</h2>
<h3 style="margin-bottom: 15px; margin-top:10px; " >Pareto-Optimal Plans</h3>

These are the 13 Pareto-optimal plans for North Carolina, ordered from most compact to least compact (and therefore in ascending order according to partisan symmetry).  The first map here is show in Figure 8 in the paper and the last map in Figure 9.  All scores are rounded to three decimal places of precision.

The districts are colored on a red-grey-blue scale, according to the margin of victory in the 2014 U.S. Senate race.  Districts with a wider margin for Democrat Kay Hagan appear 
bluer and those with a wider margin for Republican Thom Tillis appear redder.  


Next to each map is a representation of the seats-votes curve in large colored dots and the inversion about the midpoint in smaller black dots.  The partisan symmetry score can 
be understood as the degree to which the black dots align with the centers of the colored dots and the asymmetry is the normalized sum of the vertical discrepancies. 


The first map has only marginally more partisan symmetry than the second but the second is significantly more compact than the first, as can be seen below and in Figure 4 in the paper.  Several pairs of plans in this list look highly similar to each other. This is because they were found along the same run of the Markov chain Monte Carlo search procedure.  





<div class="parent">
    <div id="ncmap12" class="map"></div>
    <div id="ncmap_12_plot" class="plot"></div>
</div>
<br />


<div class="parent">
    <div id="ncmap11" class="map"></div>
    <div id="ncmap_11_plot" class="plot"></div>
</div>
<br />


<div class="parent">
    <div id="ncmap10" class="map"></div>
    <div id="ncmap_10_plot" class="plot"></div>
</div>
<br />


<div class="parent">
    <div id="ncmap9" class="map"></div>
    <div id="ncmap_9_plot" class="plot"></div>
</div>
<br />


<div class="parent">
    <div id="ncmap8" class="map"></div>
    <div id="ncmap_8_plot" class="plot"></div>
</div>
<br />


<div class="parent">
    <div id="ncmap7" class="map"></div>
    <div id="ncmap_7_plot" class="plot"></div>
</div>
<br />


<div class="parent">
    <div id="ncmap6" class="map"></div>
    <div id="ncmap_6_plot" class="plot"></div>
</div>
<br />


<div class="parent">
    <div id="ncmap5" class="map"></div>
    <div id="ncmap_5_plot" class="plot"></div>
</div>
<br />


<div class="parent">
    <div id="ncmap4" class="map"></div>
    <div id="ncmap_4_plot" class="plot"></div>
</div>
<br />


<div class="parent">
    <div id="ncmap3" class="map"></div>
    <div id="ncmap_3_plot" class="plot"></div>
</div>
<br />


<div class="parent">
    <div id="ncmap2" class="map"></div>
    <div id="ncmap_2_plot" class="plot"></div>
</div>
<br />


<div class="parent">
    <div id="ncmap1" class="map"></div>
    <div id="ncmap_1_plot" class="plot"></div>
</div>
<br />


<div class="parent">
    <div id="ncmap0" class="map"></div>
    <div id="ncmap_0_plot" class="plot"></div>
</div>
<br />
