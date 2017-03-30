---
layout: page
title: Blog
permalink: /blog/
---

---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}" style="font-size:1.5em;">{{ post.title }}</a>
	
<br>
{{ post.content | strip_html | truncatewords: 20 }}
<hr>




 </li>




  {% endfor %}
</ul>
