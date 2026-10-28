# AEGP_GetShowBlendModes

`AEGP_GetShowBlendModes`

New in CC. Passes back true if the Comp's timeline shows blend modes column, false if hidden. This will open the comp as a side effect.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetShowBlendModes(
  AEGP_CompH  compH,
  A_Boolean   *blend_modes_shownPB);
```
