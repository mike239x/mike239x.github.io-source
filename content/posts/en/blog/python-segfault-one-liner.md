+++
title = "Python Segfault One-Liner"
date = "2020-02-24"
author = "Mike Lezhnin"
tags = ["python"]
+++

Today I found a way to segfault Python, and after some investigation made a minimal working example:
```python
from threading import Thread
from itertools import count

Thread(target = lambda: [print('', end = '') for x in count()]).start()
```
The program runs infinitely, so you have to press `^C` to stop it, and it raises:
```
Exception ignored in: <module 'threading' from '/usr/lib/python3.6/threading.py'>
Traceback (most recent call last):
  File "/usr/lib/python3.6/threading.py", line 1294, in _shutdown
    t.join()
  File "/usr/lib/python3.6/threading.py", line 1056, in join
    self._wait_for_tstate_lock()
  File "/usr/lib/python3.6/threading.py", line 1072, in _wait_for_tstate_lock
    elif lock.acquire(block, timeout):
KeyboardInterrupt
Fatal Python error: could not acquire lock for <_io.BufferedWriter name='<stdout>'> at interpreter shutdown, possibly due to daemon threads

Thread 0x00007f07e3866700 (most recent call first):
  File "segfault.py", line 4 in <listcomp>
  File "segfault.py", line 4 in <lambda>
  File "/usr/lib/python3.6/threading.py", line 864 in run
  File "/usr/lib/python3.6/threading.py", line 916 in _bootstrap_inner
  File "/usr/lib/python3.6/threading.py", line 884 in _bootstrap

Current thread 0x00007f07e53a0740 (most recent call first):
Aborted (core dumped)
```
It seems Python wants to print a nice traceback message for KeyboardInterrupt, but the spawned thread constantly steals the lock for stdout, so Python just breaks.

