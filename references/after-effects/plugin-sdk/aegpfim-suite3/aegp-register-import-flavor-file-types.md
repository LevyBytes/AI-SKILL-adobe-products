# AEGP_RegisterImportFlavorFileTypes

`AEGP_RegisterImportFlavorFileTypes`

Registers arrays of file types and file extensions supported by the AEGP; the two arrays do not have to be the same length.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RegisterImportFlavorFileTypes(
  AE_FIM_ImportFlavorRef imp_ref,
  A_long num_filekindsL,
  const AEIO_FileKind *kindsAP,
  A_long num_fileextsL,
  const AEIO_FileKind *extsAP);
```
