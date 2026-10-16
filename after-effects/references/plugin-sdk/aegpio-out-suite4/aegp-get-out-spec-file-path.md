# AEGP_GetOutSpecFilePath

`AEGP_GetOutSpecFilePath`

Obtains the AEIO_OutSpecH path.

The file path is returned as a handle to a NULL-terminated A_UTF16Char string; release it with AEGP_FreeMemHandle.

When file_rsrvdPB returns TRUE, the plug-in should not overwrite the file because After Effects has already created an empty one; overwriting it can break network renders.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetOutSpecFilePath(
  AEIO_OutSpecH   outH,
  AEGP_MemHandle  *unicode_pathPH,
  A_Boolean       *file_rsrvdPB);
```
