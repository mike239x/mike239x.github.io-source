+++
title = "Caching Wikipedia"
date = "2021-03-12"
author = "Mike Lezhnin"
tags = ["webdev"]
+++

Well, I am sure the idea is not new and on the internet there are better articles about this, yet I'd like to write
something as well. I should include a disclaimer - I did zero research on this topic, so maybe what I'd talk about
already exists, and I just don't know about it.

In the most general form the idea looks like this: it is better to keep a cached version of data instead of downloading
it from the server each time. One important aspect though - the content should be immutable, so caching the main page of
reddit makes little sense (or does it?). However. There are at least four topics to cover. First, books/music/videos.
Second, wikipedia. Third, Social networks and similar. Lastly, websites in general.

Books/music/videos is by far the easiest and the hardest one on the list. It is super easy to just cache things, so from
the technical point of view it is easy, but when one actually wants to save a video from youtube per say, we get to the
law/piracy/etc, and I do not want to discuss those topics here.

Next, wiki. By far the most interesting one on the list. Let's assume for now that wiki is a static finished immutable
thing. Then we can just have cache every page we visit, so we never need to load that page again. Neat, now we no longer
need internet to visit pages we visited before, plus we reduced load on the wiki servers (less paying to keep wiki
running?). Now, to address immutability issue. One can have a VCS per page, so whenever you open a page, if you have
internet access you can pull new changes from the server.

Social networks / news websites... I am not sure if caching would be of any use, for those are all about the new things.
It might be useful - one can load only the new posts and nothing else.

Lastly, websites in general. I think one can employ the same policy as with wiki - you visited the page, you cache it,
now you have it. This can be cranked towards "more" or "less" - on the more controlled side you can get a cached version
of website by, per say, bookmarking it, on the more automatic side you just cache everything you visit.

You know what else might benefit from caching? google searches. How often did you search for exactly the same thing just
because the page you found was not important enough to keep?

One more thought before the concluding remarks. Multiple services like facebook, deepl, and reddit, and others go out of
their way and make apps for people tp be used instead of the web-version. Even though the main reason is probably having
more control over UI on smartphones, this also might be to be able to cache things.

Okay, with all this being said, what to make of it?

One idea is to have server that works in the incremental way to reduce server loads. Theoretically maybe possible, not
so useful from my perspective of a user. This also requires some level of coordination between user of server, be it
some specific protocol or something else, idk.

Another idea - have a plugin that would cache wikipedia and stack overflow pages that you visit; plus one can cache
pages on his own. To make the plugin useful it can f.e. offer some sort of search functionality for the pages you
visited. Hm. This actually sounds nice. I want this. Not sure yet what the policy for updating the cached pages would
be, but that is not so important.

Ok, I'm done rambling. TLDR - read last paragraph.

