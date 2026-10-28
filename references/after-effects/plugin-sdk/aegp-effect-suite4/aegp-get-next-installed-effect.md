# AEGP_GetNextInstalledEffect

`AEGP_GetNextInstalledEffect`

Hands back the AEGP_InstalledEffectKey belonging to the following installed effect.

To get hold of the first AEGP_InstalledEffectKey, supply AEGP_InstalledEffectKey_NONE as the opening parameter.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNextInstalledEffect(
  AEGP_InstalledEffectKey  key,
  AEGP_InstalledEffectKey  *next_keyPH);
```
