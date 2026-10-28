# ReleaseObject

ReleaseObject

Release (decrease reference count on) any object (pen, brush, path, etc). This function MUST be called for any object created using NewXYZ() from this suite.

Do not call this function on a DRAWBOT_SupplierRef and DRAWBOT_SupplierRef, since these are not created by the plug-in.

Suite argument declaration (not a standalone call):

```cpp
ReleaseObject(
  DRAWBOT_ObjectRef  in_obj_ref);
```
