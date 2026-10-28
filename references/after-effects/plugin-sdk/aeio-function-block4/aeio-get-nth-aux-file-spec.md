# AEIO_GetNthAuxFileSpec

`AEIO_GetNthAuxFileSpec`

For the specified frame, retrieves data from auxiliary file number n.

The path is returned as a handle to a NULL-terminated A_UTF16Char string; release it with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEIO_GetNthAuxFileSpec(
  AEIO_BasicData *basic_dataP,
  AEIO_InSpecH   seqH,
  A_long         frame_numL,
  A_long         n,
  AEGP_MemHandle *pathPH);
```

Input

No, if no aux files
