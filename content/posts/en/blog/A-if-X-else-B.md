+++
title = "A if X Else B"
date = "2021-03-09"
author = "Mike Lezhnin"
tags = ["python"]
+++
Welp, today instead of the usual
```python
value = a if condition else b
```
on the internet I saw
```python
value = condition and a or b
```
It shall be noted that those are not equivalent -
if `condition` is `False` we do get `value = b`, but if `condition` is `True` we get `value = a or b`, which is `a` only under certain circumstances.
So this method really only works for simple cases with `a` not being an "empty" version of its type - since `0 or 5 == 5` and `'' or 'qwe' == 'qwe'`.

Still, looks fancy and works sometimes. I am not a huge fan of how the construct `a if c else b` looks like, so I might start doing this in my code.
