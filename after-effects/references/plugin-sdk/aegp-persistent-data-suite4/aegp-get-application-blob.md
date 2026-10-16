# AEGP_GetApplicationBlob

`AEGP_GetApplicationBlob`

Gets the handle covering all persistent application data. Changing it changes the application.

The AEGP_PersistentType parameter, new in CC, should be one of these:

- AEGP_PersistentType_MACHINE_SPECIFIC

- AEGP_PersistentType_MACHINE_INDEPENDENT

- AEGP_PersistentType_MACHINE_INDEPENDENT_RENDER

- AEGP_PersistentType_MACHINE_INDEPENDENT_OUTPUT

- AEGP_PersistentType_MACHINE_INDEPENDENT_COMPOSITION

- AEGP_PersistentType_MACHINE_SPECIFIC_TEXT

- AEGP_PersistentType_MACHINE_SPECIFIC_PAINT

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetApplicationBlob(
  AEGP_PersistentType   blob_type,
  AEGP_PersistentBlobH  *blobPH);
```
