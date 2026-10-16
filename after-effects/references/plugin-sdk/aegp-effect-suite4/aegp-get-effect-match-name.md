# AEGP_GetEffectMatchName

`AEGP_GetEffectMatchName`

Fetches an effect's match name (the one set in PiPL). match_nameZ up to AEGP_MAX_EFFECT_MATCH_NAME_SIZE + 1 long.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetEffectMatchName(
  AEGP_InstalledEffectKey  installed_key,
  A_char                   *match_nameZ);
```

Match names use 7-bit ASCII. UI names follow the application's current runtime encoding; on Windows, for instance, that's ISO 8859-1 for the majority of languages.
