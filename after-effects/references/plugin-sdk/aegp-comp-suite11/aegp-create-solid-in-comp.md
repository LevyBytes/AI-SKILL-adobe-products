# AEGP_CreateSolidInComp

`AEGP_CreateSolidInComp`

Creates a new solid with a specified width, height, color, and duration in the composition. Undo-able.

If you pass NULL for the duration, After Effects uses its preference for the duration of a new still. If you pass NULL, or an invalid time scale, duration is set to the length of the composition.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CreateSolidInComp(
  const A_UTF16Char  *utf_nameZ,
  A_Long             widthL,
  A_Long             heightL,
  const PF_Pixel     *color,
  AEGP_CompH         parent_compH,
  const A_Time       *durationPT0,
  AEGP_LayerH        *new_solidPH);
```
