+++
title = "Interesting Bugs from the Miz Jam 1"
date = "2020-09-13"
author = "Mike Lezhnin"
tags = ["gamedev", "devlog"]
+++

Now, as I used Godot game engine to make my game, the bugs lists would be related to Godot quite a lot. That being said,
I believe similar situations can happen with any other engine.  Item fusing

In my game there are UFO drones that can pick up and drop items. As for how it is implemented, I decided to just abuse
the collision engine. I put collision boxes on everything, and if UFO and item collide, UFO can pick it up. In the game
I also made something I called a "crafting box" (clearly stolen from minecraft) - you put items in, and it creates an
item. In my code I would delete all items in the box, and then place the resulting craft in the center of the box.

Here is the bug - the UFO could drop the item onto the newly crafted item, as if there is a split second delay between
deleting all items in the box and creating the new item.

I thought that the item creation is not instant, so I decided to add some sort of a lid to the craft box, that would be
there to prevent item drops when the crafting happens, but that didn't really help and so in the end I still had that
bug.  Item double-grab

Two UFOs could grab the same item. The grabbing was coded like that - you take ownership of the item, and also you
remove the item from the collision layer for items.

Turns out - the collisions for items are updated on a cycle basis, meaning that any changes to collision shapes and
layers are just stored will take place only on the next cycle. Godot has this behavior documented and explains that
doing it the other way would be too complex.

As for the bug - what happens is this - first UFO takes the item, removes the item from collisions, but that change is
not yet active as the second UFO tries to grab the item.  This also explains the previous bug - there is a moment when
the item is created, but its collision shape is not accounted for.

I ended up adding lifted state to the items, so that one can't lift the lifted items.  Grabbing wrong things

Of course I messed up many times with collision layer setup and hence UFOs could grab things they should not. They
grabbed other UFOs, they grabbed invisible items from hidden scenes, they grabbed item spawners, etc. The craziest thing
was when they grabbed the lid for the crafting box (which I made to fix the first bug on this list) - by that point I
added lifted state to items, and since the lid didn't have that, I was randomly getting segfaults about something that I
try to grab not having the lifted property.  Fixing two bugs created a third one :) Hyperspeed glich

I added speed controls to the game, so it can run faster or slower, so of course I decided to test how fast can it go.
Turns out that at a certain (not too high) speed game just breaks.  Normally after you make a drone and set a route from
point A to point B for it the way it behaves is the following: take the item at A - go to B - drop item - go to A - take
item - go to B - wait till previous item is taken. However with high enough speed the drone goes mad and just keeps
running between A and B dropping items on top of one another.  I still don't know how that happens, I just limited the
maximum speed for my game and called it a day.

I guess the only conclusion from all of this would be - better not use collision engine for puzzle games? Idk.

