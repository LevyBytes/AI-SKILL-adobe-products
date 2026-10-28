# AEGP_GetStreamName

`AEGP_GetStreamName`

Fetch the stream's name (either localized or forced to English). The handle of A_UTF16Char holds a null terminated UTF16 string and must be disposed of with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetStreamName(
  AEGP_PluginID    pluginID,
  AEGP_StreamRefH  streamH,
  A_Boolean        force_englishB,
  AEGP_MemHandle   *utf_stream_namePH);
```

NOTE: set force_englishB to TRUE and the default name wins out over any renaming the stream has undergone, whether that was done in code or by the user.
