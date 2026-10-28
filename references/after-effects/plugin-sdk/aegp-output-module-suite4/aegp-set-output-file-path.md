# AEGP_SetOutputFilePath

`AEGP_SetOutputFilePath`

Sets where the AEGP_OutputModuleRefH output file is written. Supply a NULL-terminated UTF-16 path string using the platform's separator style.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetOutputFilePath(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  const A_UTF16Char      *pathZ);
```
