# AEGP_GetValueKeyByIndex

`AEGP_GetValueKeyByIndex`

Reads back the value of the key at the given index.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetValueKeyByIndex(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  A_long                key_index,
  A_long                max_key_size,
  A_char                *value_keyZ);
```


Note

In the functions below, an absent key causes the default to be written into the blob and returned; if you give no default, a blank value is written and returned.

Function

Purpose
