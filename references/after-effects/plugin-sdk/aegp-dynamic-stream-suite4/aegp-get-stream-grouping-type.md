# AEGP_GetStreamGroupingType

`AEGP_GetStreamGroupingType`

Hands back the grouping type for the given AEGP_StreamRefH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetStreamGroupingType(
  AEGP_StreamRefH          streamH,
  AEGP_StreamGroupingType  *group_typeP);
```

The `AEGP_StreamGroupingType` you get back is one among these: - `AEGP_StreamGroupingType_NONE` - `AEGP_StreamGroupingType_LEAF` - `AEGP_StreamGroupingType_NAMED_GROUP` - `AEGP_StreamGroupingType_INDEXED_GROUP`
