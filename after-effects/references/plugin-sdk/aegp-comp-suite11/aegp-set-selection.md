# AEGP_SetSelection

`AEGP_SetSelection`

Sets the selection within the given composition to the given AEGP_Collection2H.

Will return an error if members of the AEGP_Collection2H are not available. Don't assume that a composition hasn't changed between operations; always use a fresh AEGP_Collection2H.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetSelection(
  AEGP_CompH         compH,
  AEGP_Collection2H  collectionH);
```
