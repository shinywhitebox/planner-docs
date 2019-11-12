---
title: "Rules"
submenuOrder:
    - put-me-on
    - put-others
    - id-like
submenuSlug: docs-rules
tags: 
    - docs
---
# Rules

This section shows each of the rules in {{app.name}}, and how they work. 

### Articles

<ol>
{%- for page in collections.docs-rules %}
<li><a href="{{page.url}}">{{page.data.title}}</a></li>
{%-endfor %}
</ol>

    
