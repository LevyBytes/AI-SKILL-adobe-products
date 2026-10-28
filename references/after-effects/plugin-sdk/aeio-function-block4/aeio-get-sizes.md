# AEIO_GetSizes

`AEIO_GetSizes`

AEIO_Err_USE_DFLT_CALLBACK allowed. Provides output-volume free-space information and file size.

Suite argument declaration (not a standalone call):

```cpp
AEIO_GetSizes(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  A_u_longlong    *free_space,
  A_u_longlong    *file_size);
```

Output

Yes
