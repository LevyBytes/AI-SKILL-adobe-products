# AEIO_SetOutputFile

`AEIO_SetOutputFile`

AEIO_Err_USE_DFLT_CALLBACK allowed. Sets the output file path for an AEIO_OutSpecH.

Return AEIO_Err_USE_DEFAULT_CALLBACK unless your code changed the path.

file_pathZ is a NULL-terminated UTF-16 string using platform separators.

Suite argument declaration (not a standalone call):

```cpp
AEIO_SetOutputFile(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  A_UTF16Char     *file_pathZ);
```

Output

Yes
