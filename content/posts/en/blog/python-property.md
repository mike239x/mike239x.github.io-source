+++
title = "Python `property`"
date = "2021-03-15"
author = "Mike Lezhnin"
tags = ["python"]
+++

Welp, I discovered descriptors in python. I was trying to implement something similar to `@property`, which I thought of as some weird decorator, which turns a function into some sort of a function that is called without the `()` brackets.
Of course an automatically called function is something impossible, but one could inject something into `cls.__getattr__` perhaps? Turns out this is also impossible (afaik) - to get to the class one has to either hook into where the function is defined; or have something called to reach `self` and then hook into `__getattr__`, but we don't have anything being called...

After understanding that I got no clue how to create `property` on my own, I googled for that, and now I got this:

```python
class prop:
    def __init__(self, fget):
        self.fget = fget
    def __get__(self, obj, objtype=None):
        return self.fget(obj)

class A:
    @prop
    def data(self):
        return 32
```

If I produce an object with a method `__get__(self, obj, objtype=None)` inside another class, then this object is magically called without any brackets. Yeap, descriptors.

Btw, here is a link for more info: https://docs.python.org/3/howto/descriptor.html#properties

As for what I wanted to do, I now got this:
```python
def lazy(load='scan'):
    class desc:
        def __init__(self, prop):
            self.attr = f'_{prop.__name__}'
        def __get__(self, obj, objtype = None):
            if not hasattr(obj, self.attr) or getattr(obj, self.attr) == None:
                getattr(obj, load)()
            return getattr(obj, self.attr)
    return desc

class A:
    def __init__(self):
        pass
    @lazy()
    def data(): pass
    @lazy()
    def other(): pass
    def scan(self):
        self._data = 42
        self._other = 34
```

Now I can have multiple properties lazily loaded when they are needed. Yeaay.
