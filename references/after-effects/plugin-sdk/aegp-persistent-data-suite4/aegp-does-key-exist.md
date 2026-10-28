# AEGP_DoesKeyExist

`AEGP_DoesKeyExist`

Tells you whether a particular key/value pair is present in the blob.

Suite argument declaration (not a standalone call):

```cpp
AEGP_DoesKeyExist(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_Boolean             *existsPB);
```
