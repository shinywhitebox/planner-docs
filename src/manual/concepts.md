---
title: "Concepts"
submenuOrder:
    - global
    - roles
    - people
    - plans
    - roles-in-plans
    - rules
    - availability
    - teams
    - publishing
    - inviting
submenuSlug: docs-concepts
tags: 
    - docs
---
{%section "A foundation for thinking"%}
There are a few of concepts that if you understand, will make using the app that much easier. 

At the very least; getting an understanding of what we mean when we use the term *Plan* or *Role* will get you half way there :)

### Organizations

Everything about your plans, people and roles are held by an *Organization*. Think of this as a container for all "the stuff". Organizations start with randomly generated names, which can be changed later.


### Plans

You can have many plans, and people can be assigned into any of them.

The general idea is:

1. You define a *Plan* to represent a recurring event (like a show). 
1. The plan spans some amount of time that isn't too long, say three months.  
1. People are added to the plan in various roles
1. {{app.name}} does it's thing and gives you the final result.

{% warning "Note" "At present the app will happily assign people to multiple plans. This means it is possible to try to put someone on two different events at the same time (probably not what you want).<p> This will be addressed in a future update." %}

#### Role ordering within a Plan

Ordering is something we will deal with later, but you should know that each plan has a default ordering.  

e.g: If the ordering of a maintenance plan was:

1. Inspection
1. Cleaning
1. Compliance 

Then *Inspection* will always be filled first, followed by *Cleaning* and finally *Compliance*.

The key point is that these orderings define a natural priority. Because *Inspection* is first, people in the *Inspection* role are treated preferentially to everyone else. 

This can be changed in *Menu | Plans | Plan | Roles & Ordering* 


{%endsection%}

