# AEIO_VerifyFileImportable

`AEIO_VerifyFileImportable`

Sets importablePB to indicate whether the plug-in can import the file.

After Effects has already performed basic extension checking; you may still want to open the file and validate it.

That validation can take time. Most AEIOs shipped with After Effects simply return TRUE and handle invalid files during AEIO_InitInSpecFromFile.

file_pathZ is a NULL-terminated UTF-16 string using platform separators.

Suite argument declaration (not a standalone call):

```cpp
AEIO_VerifyFileImportable(
  AEIO_BasicData        *basic_dataP,
  AEIO_ModuleSignature  sig,
  const A_UTF16Char     *file_pathZ,
  A_Boolean             *importablePB);
```

Input

No
