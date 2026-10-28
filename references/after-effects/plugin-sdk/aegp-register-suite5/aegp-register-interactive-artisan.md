# AEGP_RegisterInteractiveArtisan

`AEGP_RegisterInteractiveArtisan`

Registers your AEGP as an interactive artisan, for use in previewing and rendering all layers in a given composition.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RegisterInteractiveArtisan (
  A_Version              api_version,
  A_Version              artisan_version,
  AEGP_PluginID          aegp_plugin_id,
  void                   *aegp_refconPV,
  const A_char           *match_nameZ,
  const A_char           *artisan_nameZ,
  PR_ArtisanEntryPoints  *entry_funcsP);
```
