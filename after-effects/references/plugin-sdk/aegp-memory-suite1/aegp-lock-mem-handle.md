# AEGP_LockMemHandle

`AEGP_LockMemHandle`

Locks the handle into memory (cannot be moved by OS). Use this function prior to using memory allocated by AEGP_NewMemHandle(). Can be nested.

Suite argument declaration (not a standalone call):

```cpp
AEGP_LockMemHandle(
  AEGP_MemHandle memH,
  void **ptr_to_ptr);
```
