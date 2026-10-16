# AEGP_GetLogType

`AEGP_GetLogType`

Reads the log type assigned to rq_itemH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLogType(
  AEGP_RQItemRefH  rq_itemH,
  AEGP_LogType     *logtypeP);
```

`AEGP_LogtType` will have one of the following values: - `AEGP_LogType_NONE` - `AEGP_LogType_ERRORS_ONLY` - `AEGP_LogType_PLUS_SETTINGS` - `AEGP_LogType_PER_FRAME_INFO`
