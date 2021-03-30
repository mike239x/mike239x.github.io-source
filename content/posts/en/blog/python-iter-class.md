+++
title = "Python Iter class (with proper dot notation)"
date = "2019-12-18"
author = "Mike Lezhnin"
tags = ["python", "utils"]
+++

I realized python has worse generators syntax than javascript/rust/haskell:
instead of something like
```rust
my_iterator.filter(cond).map(convert_fn).collect()
```
in python you have to write
```python
list(map(convert_fn, filter(cond, my_iterator)))
```
so everything is backwards and much harder to read. As far as I know there is no direct way that would allow one to write that in straight-forward manner.

Hence I made a small python library that fixes that.

It just introduces the `Iter` class that you can wrap around an iterator and use the chained dot notation, like so:
```python
Iter(my_iterator).filter(cond).map(convert_fn).collect()
```
I also added `first` and `drop` functions, just because they also seem somewhat useful.

The code is quite short, so here you go, maybe you will also find it useful:

```python
import functools

def first(n, it):
    for i, x in enumerate(it):
        if i == n:
            raise StopIteration
        yield x

def drop(n, it):
    for i, x in enumerate(it):
        if i == n-1:
            break
    return it

class Iter:
    def __init__(self, iterable):
        self.it = iter(iterable)
    def __iter__(self):
        return self.it
    def __next__(self):
        return next(self.it)
    def next(self):
        return next(self)
    def map(self, f):
        return Iter(map(f, self))
    def filter(self, cond):
        return Iter(filter(cond, self))
    def reduce(self, f):
        return functools.reduce(f, self)
    def drop(self, n):
        return Iter(drop(n, self))
    def first(self, n):
        return Iter(first(n,self))
    def collect(self):
        return list(self)
```
