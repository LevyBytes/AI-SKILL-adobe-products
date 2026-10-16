# AEGP_GetEffectName

`AEGP_GetEffectName`

Fetches the effect's name. nameZ can be up to AEGP_MAX_EFFECT_NAME_SIZE + 1 long.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetEffectName(
  AEGP_InstalledEffectKey  installed_key,
  A_char                   *nameZ);
```

Note: to alter the display name of an effect, reach for `AEGP_SetStreamName`.
