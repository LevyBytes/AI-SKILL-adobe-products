# AEGP_SetIndCuePointParam

`AEGP_SetIndCuePointParam`

Assigns the supplied value to an indexed cue point parameter.

Here key_lengthL counts the unicode characters, while value_lenL gives the length of the value you supply.

The pointers unicode_KeyP and unicode_ValueP reference UTF-16 data.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetIndCuePointParam(
  AEGP_MarkerValP  markerP,
  A_long           param_idxL,
  const A_u_short  *unicode_KeyP,
  A_long           key_lengthL,
  const A_u_short  *unicode_ValueP,
  A_long           value_lengthL);
```
