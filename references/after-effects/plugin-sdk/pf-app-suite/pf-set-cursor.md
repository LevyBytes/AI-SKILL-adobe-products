# PF_SetCursor

`PF_SetCursor`

Sets the cursor to any of After Effects' cursors. See AE_EffectUI.h for a complete enumeration.

Set to:

- PF_Cursor_NONE to allow After Effects to set the cursor.

- PF_Cursor_CUSTOM if you've used OS-specific calls to change the cursor (After Effects will honor your changes).

Suite argument declaration (not a standalone call):

```cpp
PF_SetCursor(
  PF_CursorType  cursor);
```
