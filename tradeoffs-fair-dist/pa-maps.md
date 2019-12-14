---
layout: default
title: Pennsylvania | Trade-offs in Fair Redistricting
permalink: /tradeoffs-fair-dist/pa-maps/
order: 7
customjs: 
- https://d3js.org/d3.v5.min.js
- https://unpkg.com/leaflet@1.5.1/dist/leaflet.js
- ../pa_data/pa_0.geojson
- ../pa_data/pa_1.geojson
- ../pa_data/pa_2.geojson
- ../pa_data/pa_3.geojson
- ../pa_data/pa_4.geojson
- ../pa_data/pa_5.geojson
- ../pa_data/pa_6.geojson
- ../pa_data/pa_7.geojson
- ../pa_data/pa_8.geojson
- ../pa_data/pa_9.geojson
- ../pa_data/pa_10.geojson
- ../pa_data/pa_11.geojson
- ../pa_data/pa_12.geojson
- ../pa_data/pa_13.geojson
- ../pa_data/pa_14.geojson
- ../pa_data/pa_15.geojson
- ../pa_data/pa_16.geojson
- ../pa_data/pa_17.geojson
- ../pa_data/pa_18.geojson
- ../pa_data/pa_19.geojson
- ../pa_data/pa_20.geojson
- ../pa_data/pa_21.geojson
- ../pa_data/pa_22.geojson
- ../pa_data/pa_23.geojson
- ../pa_data/pa_24.geojson
- ../build_pa_maps.js
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

<h2 style="margin-bottom: 7px; margin-top:10px" >Pennsylvania</h2>
<h3 style="margin-bottom: 15px; margin-top:10px; " >Pareto-Optimal Plans</h3>

These are the 25 Pareto-optimal plans for Pennsylvania, ordered from most compact to least compact (and therefore in ascending order according to partisan symmetry).  The first map here is show in Figure 10 in the paper and the last map in Figure 11.  All scores are rounded to three decimal places of precision.  

The districts are colored on a red-grey-blue scale, according to the margin of victory in the 2016 U.S. Senate race.  Districts with a wider margin for Democrat Katie McGinty appear bluer and those with a wider margin for Republican Pat Toomey appear redder.  The maps are interactive and the curious reader is encouraged to zoom in on the Philadelphia area in the southeast corner of the state, as the high population density in that region results in several small districts which may be hard to see in the default view.

Next to each map is a representation of the seats-votes curve in large colored dots and the inversion about the midpoint in smaller black dots.  The partisan symmetry score can 
be understood as the degree to which the black dots align with the centers of the colored dots and the asymmetry is the normalized sum of the vertical discrepancies.

The maps with a high degree   Because the concentration of Democrats in the cities is much higher than the concentration of Republicans in the rural areas, achieving a high degree 
of partisan symmetry requires diluting the Democratic voters in the Philadelphia region to match the natural partisan breakdown of the middle of the state.  In the 
highly compact plans, we can observe that the most Democratic-favoring districts have a more extreme partisan imbalance than the most Republican-favoring districts, causing the high degree of partisan asymmetry.

Several pairs of plans in this list look highly similar to each other. This is because they were found along the same run of the Markov chain Monte Carlo search procedure.  

<div class="parent">
<div id="pamap24" class="map"></div>
<div id="pamap_24_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap23" class="map"></div>
<div id="pamap_23_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap22" class="map"></div>
<div id="pamap_22_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap21" class="map"></div>
<div id="pamap_21_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap20" class="map"></div>
<div id="pamap_20_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap19" class="map"></div>
<div id="pamap_19_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap18" class="map"></div>
<div id="pamap_18_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap17" class="map"></div>
<div id="pamap_17_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap16" class="map"></div>
<div id="pamap_16_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap15" class="map"></div>
<div id="pamap_15_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap14" class="map"></div>
<div id="pamap_14_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap13" class="map"></div>
<div id="pamap_13_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap12" class="map"></div>
<div id="pamap_12_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap11" class="map"></div>
<div id="pamap_11_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap10" class="map"></div>
<div id="pamap_10_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap9" class="map"></div>
<div id="pamap_9_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap8" class="map"></div>
<div id="pamap_8_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap7" class="map"></div>
<div id="pamap_7_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap6" class="map"></div>
<div id="pamap_6_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap5" class="map"></div>
<div id="pamap_5_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap4" class="map"></div>
<div id="pamap_4_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap3" class="map"></div>
<div id="pamap_3_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap2" class="map"></div>
<div id="pamap_2_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap1" class="map"></div>
<div id="pamap_1_plot" class="plot"></div>
</div>
<br />


<div class="parent">
<div id="pamap0" class="map"></div>
<div id="pamap_0_plot" class="plot"></div>
</div>