# AEGP_GetIndCuePointParam

`AEGP_GetIndCuePointParam`

Hands back the cue point parameter at the given index (which must fall between 0 and (cue point params -1).

The handles returned are UTF-16, NULL-terminated strings, and the caller must free them with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetIndCuePointParam(
  AEGP_PluginID         id,
  AEGP_ConstMarkerValP  markerP,
  A_long                param_indexL,
  AEGP_MemHandle        *unicodeKeyPH,
  AEGP_MemHandle        *uni_ValuePH);
```
