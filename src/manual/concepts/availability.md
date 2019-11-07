---
title: "Availability"
tags: 
    - docs-concepts
---

{%section "Availability" %}

Availability defines how often, at most, a person will be put on a schedule.  

- Anytime: a person can be put on at any point. There is no restriction on the number of times they can appear in a schedule/roster.
- Regularly, Every: Every N weeks/days. e.g: if I set availability to every 3 weeks, then I will be on the roster at most every 3 weeks.
- Every N in M: A slight modification of the previous option, where you can be on "on average" N times over a period of M weeks. 

{%tip "Every N in M is averaged" "Every N in M works using averages. It might be that sometimes a person is rostered on more often than the rule setting, but on average over the entire plan, the rule should hold" %}

##### Unavailability

Unavailability defines when a person cannot be on, e.g: vacation / holiday dates.

Unavailability can be set using single values, or date ranges. 
The planner will not place a person into a role if they are unavailable on that day.  

{%endsection%}
