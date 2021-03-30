+++
title = "Random Python Fact of the Day"
date = "2020-01-13"
author = "Mike Lezhnin"
tags = ["python", "jokes"]
+++

If you have an abstract base class with a static method, then the order of decorators should be like that:
```python
@staticmethod
@abstractmethod
def my_fancy_method():
    pass
```

If you switch them around you would get `AttributeError: attribute '__isabstractmethod__' of 'staticmethod' objects is not writable`. Now you know.
