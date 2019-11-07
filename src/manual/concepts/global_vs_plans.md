---
title: "Global vs Per Plan Data"
tags: 
    - docs-concepts
---
{%section "Data is split" %}

Data is split into two parts in {{app.name}}.

1. Global
1. Per plan

The split exists so that if people are in multiple plans, you don't have to duplicate their details across those plans.  If I put myself into a band and also onto a management team; my details are *global*, they are shared between those two plans.  

{%endsection%}

{%section "Global Data" %}
The following things are global:

#### People
As you'd imagine, each person defines someone that can be placed into a plan. Each person has defined:
- Name
- Email
- Availability
- Unavailability (aka: vacation)

#### Roles
Each role is esentially a name, along with some properties that affect its usage within the plan.  

While roles are defined globally, a plan doens't have to contain all roles. 
Roles have the following propertis:
- Name
- Minimum number of times it must be used (can be zero): think of this as a 'we need at least this many people'
- Maximum number of times it can be used: think of this as 'don't put on more than this number of people'

{%endsection%}
