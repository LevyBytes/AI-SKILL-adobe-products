# AEGP_GetMatchName

`AEGP_GetMatchName`

Hands back the match name for the named AEGP_StreamRefH.

Be aware this can be unlike the display name, which AEGP_GetStreamName, in AEGP_StreamSuite5, will retrieve.

nameZ can be up to AEGP_MAX_STREAM_MATCH_NAME_SIZE in length.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetMatchName(
  AEGP_StreamRefH  streamH,
  A_char           *nameZ);
```
