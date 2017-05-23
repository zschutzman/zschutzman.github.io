---
layout: page
title: The Blog
permalink: /blog/
---

#### Welcome to my blog!

---


  {% for post in site.posts %}

{% if post.image == true %}
![]({{ site.url }}/assets/images/{{post.imagefile}}){:style="float: left;"}

&nbsp;&nbsp;&nbsp;&nbsp;
{% endif %}

<a href="{{ post.url }}" style="font-size:1.5em;">{{ post.title }}</a>	


      


      
	

{{ post.content | strip_html | truncatewords: 40 }}
<hr>





  {% endfor %}

