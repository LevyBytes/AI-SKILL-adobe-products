# AEGP_RegisterImportFlavorImportCallbacks

`AEGP_RegisterImportFlavorImportCallbacks`

Registers the AEGP callbacks that respond when different file types are imported.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RegisterImportFlavorImportCallbacks(
  AE_FIM_ImportFlavorRef        ref,
  AE_FIM_ImportFlags            single_flag,
  const AE_FIM_ImportCallbacks  *imp_cbsP);
```
