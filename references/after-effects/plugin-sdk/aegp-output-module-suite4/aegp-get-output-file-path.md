# AEGP_GetOutputFilePath

`AEGP_GetOutputFilePath`

Gets the destination path for the AEGP_OutputModuleRefH output file. The returned path is a handle containing a NULL-terminated A_UTF16Char string; release it with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetOutputFilePath(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_MemHandle         *unicode_pathPH);
```
