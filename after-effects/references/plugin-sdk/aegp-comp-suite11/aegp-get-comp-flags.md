# AEGP_GetCompFlags

`AEGP_GetCompFlags`

Returns composition flags, or'd together.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetCompFlags(
  AEGP_CompH      compH,
  AEGP_CompFlags  *AEGP_CompFlags);
```

- `AEGP_CompFlag_SHOW_ALL_SHY` - `AEGP_CompFlag_ENABLE_MOTION_BLUR` - `AEGP_CompFlag_ENABLE_TIME_FILTER` - `AEGP_CompFlag_GRID_TO_FRAME` - `AEGP_CompFlag_GRID_TO_FIELDS` - `AEGP_CompFlag_USE_LOCAL_DSF` - `AEGP_CompFlag_DRAFT_3D` - `AEGP_CompFlag_SHOW_GRAPH`
