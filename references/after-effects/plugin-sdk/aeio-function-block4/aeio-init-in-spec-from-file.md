# AEIO_InitInSpecFromFile

`AEIO_InitInSpecFromFile`

Given a file path, describe the file contents to After Effects through the supplied AEIO_InSpecH.

Use the appropriate "set" calls from AEGP_IOInSuite for this; when image data exists, set depth, dimensions, and alpha interpretation.

When audio exists, describe the channels and sample rate.

file_pathZ is a NULL-terminated UTF-16 string using platform separators.

Suite argument declaration (not a standalone call):

```cpp
AEIO_InitInSpecFromFile(
  AEIO_BasicData     *basic_dataP,
  const A_UTF16Char  *file_pathZ,
  AEIO_InSpecH       inH);
```

Input

Yes, for file-based media
