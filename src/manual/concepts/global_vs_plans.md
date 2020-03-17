---
title: "A word on 'data'"
tags: 
    - docs-concepts
---
{%section "How Data is Managed" %}

Information is split into two parts in {{app.name}}.

1. Shared (e.g: people & roles) 
1. Per plan 

*Shared data* is owned by the organization. *'Per plan'* data is associated with each plan.   

The split exists so that if people are in multiple plans, you don't have to duplicate their details across those plans.  If I put myself into a band and also onto a management team; my details are *shared* or *global*, they are shared between every plan.

For example, a person's unavailability is shared across multiple plans. It's set once on the person, and then used in multiple places.
  
{%endsection%}

{%section "Shared Data" %}

The following things are shared:

#### People
As you'd imagine, each person defines someone that can be placed into a plan. Each *person* has the following fields:
- Name
- Email
- Availability
- Unavailability (aka: vacation)

#### Roles
A role describes a task or activity that needs doing within a Plan.  Roles are filled by people, and they can be optional.

Examples roles:
- Speaker (you may have a set of speakers that rotate through this duty across some number of events)
- Cooking (you might put together a flat roster; and this role would indicate who's cooking tonight)
- Setup (you might have minimum of two, maximum of three people setting up a stage)
 
Roles have the following fields:
- Name
- Minimum number of times it must be used (can be zero): think of this as a 'we need at least this many people'
- Maximum number of times it can be used: think of this as 'don't put on more than this number of people'

{%endsection%}

{%section "Plan Mode: Draft & Published" %}

Plans can be in *draft* or *published* mode. The intention is that a draft plan is something being worked on, something that is in flux and certainly not yet finalized.  

A *published* plan on the other hand is done, and becomes read-only at the time it is published.  The rationale is that if people have committed to being in that plan; you don't want the system potentially reworking it (perhaps quite dramatically) based on some changes to peoples availability or vacation dates later on.  You want published plans to stay fixed in place.  

{%info "Intended Enhancement" "The intention is that you will be able to manage the above changes by exceptions. The plan will stay the same, *apart* from the exceptions (such as swapping people; people being unavailable on short notice; and so on).  <br/><br/>This is planned for a future date - its at the top of my list" %}

{%endsection%}
