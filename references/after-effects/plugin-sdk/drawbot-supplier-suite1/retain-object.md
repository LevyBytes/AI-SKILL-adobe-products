# RetainObject

RetainObject

Retain (increase reference count on) any object (pen, brush, path, etc). For example, it should be used when any object is copied and the copied object should be retained.

Suite argument declaration (not a standalone call):

```cpp
RetainObject(
  DRAWBOT_ObjectRef  in_obj_ref);
```
