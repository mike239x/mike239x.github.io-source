+++
title = "TIL to peek into zip archives"
date = "2021-03-09"
author = "Mike Lezhnin"
tags = ["lunix", "utils"]
+++

It is just a minute of googling, but I just learned it and I think it is worth sharing. Say you have `data.zip`, then you can:
1. `$ vim data.zip`
2. `$ less data.zip`
3. or the not-so-fancy `$ unzip -l data.zip`
The vim version is super fancy - you can even peek into different files in the archive there! (doesn't really work for images, but oh well, what can you do)

