# AEGP_ReorderStream

`AEGP_ReorderStream`

Gives the named AEGP_StreamRefH a new index. Undoable.

Permitted only for children of AEGP_StreamGroupingType_INDEXED_GROUP.

Once done, the AEGP_StreamRefH now points at the freshly reordered stream.

Suite argument declaration (not a standalone call):

```cpp
AEGP_ReorderStream(
  AEGP_StreamRefH streamH,
  A_long new_indexL);
```
