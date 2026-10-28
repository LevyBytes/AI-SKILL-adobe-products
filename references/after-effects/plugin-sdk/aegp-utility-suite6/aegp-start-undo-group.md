# AEGP_StartUndoGroup

`AEGP_StartUndoGroup`

Queues action(s) for undo. Anything between this call and AEGP_EndUndoGroup() can be undone by the user.

undo_nameZ shows up in the edit menu.

Suite argument declaration (not a standalone call):

```cpp
AEGP_StartUndoGroup(
  const A_char  *undo_nameZ);
```
