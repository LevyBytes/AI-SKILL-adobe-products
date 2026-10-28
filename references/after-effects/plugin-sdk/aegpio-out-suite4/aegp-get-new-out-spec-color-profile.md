# AEGP_GetNewOutSpecColorProfile

`AEGP_GetNewOutSpecColorProfile`

Returns an opaque ICC color profile for embedding in AEIO output.

Use AEGP_DisposeColorProfile to dispose it.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewOutSpecColorProfile(
  AEGP_PluginID       aegp_plugin_id,
  AEIO_OutSpecH       outH,
  AEGP_ColorProfileP  *color_profilePP);
```
