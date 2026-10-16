# AEGP_GetType

`AEGP_GetType`

Reads the AEGP_WorldType associated with the supplied AEGP_WorldH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetType(
  AEGP_WorldH worldH,
  AEGP_WorldType *typeP);
```

`AEGP_WorldType` will be one of the following: - `AEGP_WorldType_8` - `AEGP_WorldType_16` - `AEGP_WorldType_32`
