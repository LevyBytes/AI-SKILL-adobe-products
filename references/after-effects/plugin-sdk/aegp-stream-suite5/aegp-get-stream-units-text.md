# AEGP_GetStreamUnitsText

`AEGP_GetStreamUnitsText`

Fetch the stream's units rendered as text (localized or forced to English); unitsZ can run up to AEGP_MAX_STREAM_NAME_LEN + 1 long.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetStreamUnitsText(
  AEGP_StreamRefH  streamH,
  A_Boolean        force_englishB,
  A_char           *unitsZ);
```
