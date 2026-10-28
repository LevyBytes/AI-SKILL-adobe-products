# PF_SetOptionsButtonName

`PF_SetOptionsButtonName`

Relabels the options button shown in the effect controls palette.

Note

This must be called during `PF_Cmd_PARAM_SETUP`.

Suite argument declaration (not a standalone call):

```cpp
PF_SetOptionsButtonName(
  PF_ProgPtr    effect_ref,
  const A_char  *nameZ);
```

nameZ may be up to A_char[31] in length.
