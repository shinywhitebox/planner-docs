---
title: "Concepts"
submenuOrder:
    - a-word
    - roles
    - people
    - plans
    - roles-in-plans
    - rules
    - publishing
    - shar
    - availability
    - teams
    - inviting
submenuSlug: docs-concepts
tags: 
    - docs
---
{%section "A foundation for thinking"%}
There are a few of concepts that if you understand, will make using the app that much easier. 

At the very least; getting an understanding of what we mean when we use the term *Plan* or *Role* will get you half way there :)

### Organizations

Everything about your plans, people and roles are held by an *Organization*. Think of this as a container for all "the stuff". Organizations start with a randomly generated name, which can be changed later.


### Plans

You can have many plans, and people can be assigned into any of them.

The general idea is:

1. You define a *Plan* to represent a recurring event (like a show). 
1. The plan spans some amount of time that isn't too long, say three months.  
1. People are added to the plan in various roles.
1. {{app.name}} works out who is doing what when; fairly. The result can be viewed in the app or exported to a sheet.

{% info "Note" "At present the app will happily assign people to multiple plans. This means it is possible to try to put someone on two different events at the same time (probably not what you want).<p> This will be addressed in a future update." %}

#### Role ordering 

Role Ordering is something we will deal with later, but you should understand that roles *are ordered*, and are *processed in that order* when the plans are worked out.  

This is very useful later on.  Don't worry about remembering all this now, just know that role ordering "is a thing".  

e.g: If the ordering of a maintenance plan was:

1. Inspection 
1. Cleaning
1. Compliance 

Where *Inspection* has the highest priority, then *Inspection* will always be filled first, followed by *Cleaning* and finally *Compliance*.

The key point is that role orderings define a natural priority. Because *Inspection* is first, people in the *Inspection* role are treated preferentially to everyone else. 

Role Ordering can altered from the Plan Details page, which is found at: *Menu | Plans | Plan | Roles & Ordering*.

For more detail see {% link "roles" "concepts/roles" %}

{%endsection%}

