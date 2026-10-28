# AEGP_CreateNullInComp

`AEGP_CreateNullInComp`

Creates a "null object" in the composition (useful for translating projects from 3D applications into After Effects).

If you pass NULL for the duration, After Effects uses its preference for the duration of a new still. If you pass 0, or an invalid time scale, duration is set to the length of the composition.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CreateNullInComp(
  const A_UTF16Char  *utf_nameZ,
  AEGP_CompH         parent_compH,
  const A_Time       *durationPT0,
  AEGP_LayerH        *new_null_solidPH);
```
