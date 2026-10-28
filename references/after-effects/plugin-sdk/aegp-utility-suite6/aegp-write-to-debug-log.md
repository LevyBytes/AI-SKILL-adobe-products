# AEGP_WriteToDebugLog

`AEGP_WriteToDebugLog`

Records a message in the debug log, or on the OS command line when After Effects was started with the "-debug" option.

Suite argument declaration (not a standalone call):

```cpp
AEGP_WriteToDebugLog(
  const A_char  *subsystemZ,
  const A_char  *event_typeZ,
  const A_char  *infoZ);
```
