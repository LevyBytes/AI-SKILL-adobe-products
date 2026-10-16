# PF_PathGetName

`PF_PathGetName`

Retrieves the name of the path (up to PF_MAX_PATH_NAME_LEN long).

Suite argument declaration (not a standalone call):

```cpp
PF_PathGetName(
  PF_ProgPtr  effect_ref,
  PF_PathID   unique_id,
  A_char      *nameZ);
```
