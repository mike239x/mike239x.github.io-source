+++
title = "Analysis of MK11"
date = "2020-12-28"
author = "Mike Lezhnin"
tags = ["gamedev"]
+++

Mortal Kombat 11 was on sale on Steam, so I bought it and after downloading 100G of whatever is inside of the game I got
to play it for the first time in my life. I never played fighting games before (expect maybe for Nidhogg), and I only
saw clips from gameplay of other MK games on youtube at most, so I was a complete beginner when I started, but I had a
friend who was willing to explain things to me.

I never got really good at the game - after playing for three days I finished all the tutorials, managed to make a fancy
combo with a scorpion, and even beat a single opponent online (after losing about 10 times in a row); but then I got
kinda bored and didn't play it since then. Nonetheless, there are a few interesting things I noticed while playing the
game, which I would like to share with you.

# Systems against juggling

To juggle the opponent means to hit them upwards repeatedly, which makes them pretty much unable to do anything but wait
and watch us do our thing. Feels quite unfair, doesn't it?

MK11 got multiple systems in place to make the entire situation look fair. First, there is damage scaling - if the
opponents does a series of punches in your face, each next punch deals less and less damage. Second, there is gravity
scaling - the longer you are in the air, the more you are pulled towards the ground, making it so that your opponent
just can't keep you in the air of some point. An important thing to add here - after you fell down, the opponent cannot
punch you until you stand up - so falling down means breaking the combo.

Lastly, while in the air the defending player gets a chance to use "combo breaker" - which pretty much instantly makes
the juggled player fall down and effectively ends the combo. However, to do this one has to spend something called
Defensive Gauge.

# Offensive and defensive gauges

Confusing topic at first, but turns out to be an interesting addition to the game. 

Besides the health both players have another resource - offensive and defensive gauges. Unlike health, these replenish
over time. Also, these gauges have only 2 bars, meaning it is a fairly limited resource.

These gauges are used to do some very special moves. One of the main ways to spend offensive gauge is to amplify special
moves. Skipping details, this allows players to deal more damage and often lets players to extend juggling combos - it
is also often the only way to extend the juggling combo. As for defensive gauge, you can break from combos using "combo
breaker", and also to do get-up rolls - a way to roll to or away from the opponent when standing up after being knocked
down. That can help to change the distance to opponent, which seems to be an important aspect of the gameplay.

There is also other stuff that I didn't include, but the important point being - there are some very strong moves, which
all share the same common resource to limit their usage. You would normally see this kind of system with shared
resources in some kind of turn-based game with action points; however it fits quite nicely in MK11. Perhaps next time
someone creates a game with a bunch of abilities with cooldowns one could instead have them all share some resource. Now
that I think about it, it is kinda like mana in other games, but mana is rarely treated as a rare and limiting resource
:thinking:.

# Interactive elements on the map

Each match is played on a map, which mostly is there for background scene, but it also has interactive elements. Most of
them can be used for punching enemies, dealing a lot of damage, spending offensive gauge, and triggering a fancy
cinematic with breaking bones (typical MK11).

I think interactive elements on the map in general is a very nice thing to have as an extra polish to any game.

# Krushing blows

The typo is intentional - in MK11 all words starting with 'C' are written with 'K' instead - not a bug, but a feature.
Basically, under certain conditions your attack becomes a krushing blow, dealing a lot of damage and triggering a fancy
cinematic with breaking bones (typical MK11 x2).
 
It feels very rewarding to do crushing blows, and it also makes the gameplay more entertaining. Just a nice example of
positive reinforcement, I guess.

# Testing room

One of the best implementations of testing rooms that I have seen. By testing room I mean a place to just test various
stuff.

First of all, it has a setting to save the settings! I think it is very nice option that isn't present in many other
games.

Second, in MK11 an important aspect of the game is the frame data of punches. Each punch has start-up frames, active
frames, and recovery frames; with recovery frames varying based on whether the opponent blocked the punch or not. From
that two more important numbers are deduced - hit advantage and block advantage - how many frames you gain/lose if your
punch is face-tanked/blocked. With this info being so important one would assume this info would be easily accessible by
players, and one would be correct! Not only you can look up all that info for all the different moves and combos you
have, but you can also have an in-game UI showing you this data for the last move you did.

Third, you can choose a bunch of behaviors for the opponent. I didn't explore that much, but I saw that one can choose a
lot of options for how the bot blocks and attacks, making it nice to train certain scenarios.

Fourth, you can restart the room by a press of a single button! Very nice option for practicing juggle combos.

There is probably more to it, but I was too lazy to explore other options.

# Final words

Overall, MK11 is by all means not a perfect game, but it has quite a few nice features to appreciate.

I think I will eventually take a look at two other fighting games from my wishlist, "Skullgirls" and "Lethal League
Blaze", to see what those have to offer.
