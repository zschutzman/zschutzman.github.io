---
layout: page
title: Blog
permalink: /blog/
---

* Blog!

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
<br>
{{ post.content | strip_html | truncatewords: 50 }}
    </li>
  {% endfor %}
</ul>
