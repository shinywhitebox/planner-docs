---
title: "Layout Priority"
tags: 
    - docs-advanced
---

{%section "What is layout ordering?" %}

Layout Order is a way to force some roles to be laid out completely, before other roles are considered at all.
In other words; it's a way to specify priority when laying out roles. 
You can think of *Layout order* like groups. Roles with higher layout orders are laid out before those with lower order numbers.

e.g:
- Consider two roles; *Manager* and *Worker*
- You would place *Manager* in layout order 2 and *Worker* in layout order 1, because you cannot have Workers without Managers.  

Higher numbers win. 2 > 1, so whatever is in group 2 is laid out before group 1.  
If you had a group with layout order of 3, it would be laid out before group 2.   

Here's an example showing the layout order for our introductory demo:

{%image "Example Layout Order" "/assets/images/advanced/layout-order.jpg" %}

This shows that **all of Inspection** will be placed into the plan **before** Building / Cleaning and Inventory.

This means that you can force certain roles to be laid out in the plan, in their entirety, before other roles are even considered.

It's good when you want to make sure that a given role is totally populated before other roles are considered.

### See it in action

{%video "https://www.youtube.com/embed/yJeOC_Phyyk" %}


{%endsection%}
