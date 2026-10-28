# AEGP_GetNewStreamValue

`AEGP_GetNewStreamValue`

Fetch the stream's value at a time of your choosing. valueP has to be disposed of by the plug-in.

The AEGP_LTimeMode indicates whether the time is in compositions or layer time.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewStreamValue(
  AEGP_PluginID      aegp_plugin_id,
  AEGP_StreamRefH    streamH,
  AEGP_LTimeMode     time_mode,
  const A_Time       *timePT,
  A_Boolean          pre_exprB,
  AEGP_StreamValue2  *valueP);
```
