# AEGP_SetMarkerFlag

`AEGP_SetMarkerFlag`

Assigns a value to one of a marker's flags.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetMarkerFlag(
  AEGP_MarkerValP      markerP,
  AEGP_MarkerFlagType  flagType,
  A_Boolean            valueB);
```

At present, `AEGP_MarkerFlagType` takes one of these: - `AEGP_MarkerFlag_NONE` - `AEGP_MarkerFlag_NAVIGATION`
