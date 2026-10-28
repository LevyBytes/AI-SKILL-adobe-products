# AEGP_GetStretchInfo

`AEGP_GetStretchInfo`

Retrieves the stretch configuration for outmodH, including the stretching enable flag, the composition-aspect-ratio lock, and the selected quality setting.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetStretchInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  A_Boolean              *enabledPB,
  AEGP_StretchQuality    *qualP,
  A_Boolean              *lockedPB);
```

`AEGP_StretchQuality` will be one of the following: - `AEGP_StretchQual_LOW` - `AEGP_StretchQual_HIGH`
