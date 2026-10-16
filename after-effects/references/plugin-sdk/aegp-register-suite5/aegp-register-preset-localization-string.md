# AEGP_RegisterPresetLocalizationString

`AEGP_RegisterPresetLocalizationString`

Call this to register as many strings as you like for name-replacement when presets are loaded.

Any time a Property name is found, or referred to in an expression, and it starts with an ASCII tab character ('t'), followed by one of the English names, it will be replaced with the localized name.

(In English the tab character will simply be removed).

Suite argument declaration (not a standalone call):

```cpp
AEGP_RegisterPresetLocalizationString(
  const A_char  *english_nameZ,
  const A_char  *localized_nameZ);
```
