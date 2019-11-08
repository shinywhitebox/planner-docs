---
title: "Plans"
tags: 
    - docs-concepts
---
{%section "Plans" %}

*Plans* are the glue that holds *People*, *Roles* and a time period together. A plan is used to generate a roster/schedule. It's also where all the cool stuff happens :)

### How it works

A *Plan* is really just a defined date range. This date range is the period that you want to create a schedule/roster for.

In order to create a roster you need people right? So *plans* contain people.

People also do *stuff*. So within the plan you assign *roles* to people.

{{app.name}} does the rest :)

<br/>

### Adding a plan

Plans are added through the *Menu|Plans* page. 

To add a new plan: Click the + button on the top right. You'll enter the new plan editor immediately. Plans start with a default duration of three months and repeat weekly.  If you want to change the day on which the plan repeats; change it's *start date*.

A plan has its own local copy of the roles and ordering. When a plan is created it makes a copy of the ordering defined by the {%link "global roles" "concepts/roles" %}.

##### Tips


- Changing the duration: Click the start/end date buttons and choose the appropriate date.
- Changing the repeat interval: If your event isn't weekly; you can change this by clicking on the 'repeats every...' "change" button and selecting the interval in days between events. 

### Duplicating a plan

Duplicate an existing plan: Swipe *right* on the plan. Press the *duplicate* button that appears.

A new plan will be created that follows on from the previous. By default, it will span three (3) months.


### Deleting a plan

You can delete a plan by swiping left, and clicking the 'Delete' button that appears.

{%warning "Note" "You cannot remove a plan that is being used, or is published" %}

{%endsection%}
