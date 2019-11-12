---
title: "Howto"
submenuOrder:
    - change
submenuSlug: docs-howto
tags: 
    - docs
---
# Howto

This section shows how to perform various specific tasks in {{app.name}} 

### Articles

<ol>
{%- for page in collections.docs-howto %}
<li><a href="{{page.url}}">{{page.data.title}}</a></li>
{%-endfor %}
</ol>


