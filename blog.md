---
layout: blog
permalink: /blog/
title: Blog
---

# The Blog
{: style="color:#800000;" :}


---


  {% for post in site.posts %}

{% if post.image == true %}
![]({{ site.url }}/assets/images/{{post.imagefile}}){:style="float: left;"}
<br>
{% endif %}

  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3> {{ post.date | date_to_string }}

	

{{ post.content | strip_html | truncatewords: 40 }}
<hr>





  {% endfor %}

