# AEGP_GetInSpecFilePath

`AEGP_GetInSpecFilePath`

Retrieves the file path for AEIO_InSpecH.

The file path is returned as a handle to a NULL-terminated A_UTF16Char string; release it with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetInSpecFilePath(
  AEIO_InSpecH    inH,
  AEGP_MemHandle  *file_nameZ);
```
