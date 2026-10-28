# AEGP_RegisterImportFlavor

`AEGP_RegisterImportFlavor`

Registers the name of the file type or types supported by the plug-in. On return, imp_refP is either a usable opaque reference or AE_FIM_ImportFlavorRef_NONE.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RegisterImportFlavor(
  const A_char *nameZ,
  AE_FIM_ImportFlavorRef *imp_refP);
```
