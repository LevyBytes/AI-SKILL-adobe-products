# AEGP_RegisterArtisan

`AEGP_RegisterArtisan`

Register your Artisan. See Artisans for more details.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RegisterArtisan(
  A_Version api_version,
  A_Version artisan_version,
  AEGP_PluginID aegp_plugin_id,
  void *aegp_refconPV,
  const A_char *match_nameZ,
  const A_char *artisan_nameZ,
  PR_ArtisanEntryPoints *entry_funcs);
```
