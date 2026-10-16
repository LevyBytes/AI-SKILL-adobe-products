# AEGP_GetMarkerString

`AEGP_GetMarkerString`

Fetches the UTF-16, NULL-terminated string held in the named marker field. The caller is responsible for freeing it with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetMarkerString(
  AEGP_PluginID          id,
  AEGP_ConstMarkerValP   markerP,
  AEGP_MarkerStringType  strType,
  AEGP_MemHandle         *unicodePH);
```
