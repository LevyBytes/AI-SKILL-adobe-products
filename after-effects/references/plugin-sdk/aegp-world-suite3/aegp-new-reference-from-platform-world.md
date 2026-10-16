# AEGP_NewReferenceFromPlatformWorld

`AEGP_NewReferenceFromPlatformWorld`

Gets an AEGP_WorldH that refers to the supplied AEGP_PlatformWorldH.

NOTE: No additional world is allocated here; the function only returns a reference to the existing one.

Suite argument declaration (not a standalone call):

```cpp
AEGP_NewReferenceFromPlatformWorld(
  AEGP_PluginID        plugin_id,
  AEGP_PlatformWorldH  plat_worldH,
  AEGP_WorldH          *worldPH);
```
