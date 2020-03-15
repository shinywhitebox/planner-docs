---
title: "Roles"
tags: 
    - docs-concepts
---
{%section "Roles" %}

When considering the creation of a roster; people are slotted/put/assigned into *Roles*. In {{app.name}} there's no way to place someone into a roster without them being assigned to a role.


### Global Roles

To use roles, they must first be defined.  This is done in the global *Roles* editor, which is accessed via *Menu | Roles*.

Roles defined here can be used in many plans. 

#### Adding a role

You can add a single role using the + button on the top right. 

- Name: The name of the role. Required.
- Summary: a textual description of the min/max settings below.
    - Min: the minimum number of peoples required. Set this to 0 to make the role optional.
    - Max: the maximum number of people that can be in the role. {{app.name}} will stop trying to fill this role when at this point. 
    
There are various buttons underneath the min/max sliders. These are just shortcuts. Press them to set the min/max values.  e.g: Pressing 'Optional' sets min to 0 and max to 1.

{%video "https://www.youtube.com/embed/-7iUi3uB1Tw" %}

#### Adding many roles from built-in presets

You can add one or more roles from the built in presets by clicking the 'wizard' icon on the top right.
- Click the 'wizard' button
- From the dialog, choose the general area you want to grab roles from
- All roles from this area are added automatically.
    - Feel free to delete roles that you don't need.
     

{%video "https://www.youtube.com/embed/qQDGp58rAPc" %}

#### Editing role order

The order that the roles appear in can be changed by clicking the *Edit* button on the top right.  Drag the roles using the handles on the right hand side. Click *Done* when you're finished.

#### Changing Layout Order

Layout order is specified per role. To change it, click the role itself and make the change inside the role editor.

#### Removing a role from a person

People are assigned roles when they are part of a Plan, so to remove a role from a person:

1. First, go to the Plan that they are part of.
1. Find the person in that plan, and click/tap on them
1. Under their 'roles' heading; swipe left to show the delete button
1. Press DELETE to remove them from that roles

{%image "Deleting a Role" "/assets/images/roles/delete-a-role.png" %}


{%endsection%}
