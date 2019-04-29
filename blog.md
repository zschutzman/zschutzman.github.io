---
layout: blog
permalink: /blog/
title: Blog
order: 100
---

# The Blog

---


  {% for post in site.posts %}
<div style="margin:20px"></div>

<div style="border: 3px solid black;border-radius: 15px; background: #f6f6f6; position:relative;">
{% if post.image == true %}
    <div style="width: 165px; height:150px; float: left; position: absolute; top: 0; bottom: 0; margin: auto;">
        <img src="{{post.imagefile}}" width="150" height="150" style="transform: translate(15px,0px); border-radius: 5%; border: solid black 2px" />
    </div>
 <div style="margin-left: 165px; padding: 15px; ">
 <h2 style="font-size:1.2em; margin-top:0px; text-align:center; word-break: break-all; hyphens: auto; color:$text-color">
{% else %}
 <div style="margin-left: 15px; padding: 15px; ">
 <h2 style="font-size:1.2em; margin-top:0px; margin-bottom:1px; text-align:center; word-break: break-all; hyphens: auto; color:$text-color">
 {% endif %}
  <a href="{{ post.url }}">{{ post.title }}</a> </h2>
<p style="color: $text-color; margin: 0 0 5px 0; font-size: 0.85em; line-height: 115%;">
{{ post.content | markdownify | strip_html | truncatewords: 60 }}
<br/>
<small><span style="margin: 0px" style="float: right">{{ post.date | date_to_string }}</span></small>
</p>
</div>
</div>
 {% endfor %}

