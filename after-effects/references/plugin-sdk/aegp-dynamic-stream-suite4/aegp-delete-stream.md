# AEGP_DeleteStream

`AEGP_DeleteStream`

Removes the named stream out of a stream grouping.

Keep in mind that the caller still has to dispose of any AEGP_StreamRefH it already acquired (allocated) through the API. Undoable.

Permitted only for children of type AEGP_StreamGroupingType_INDEXED_GROUP.

Suite argument declaration (not a standalone call):

```cpp
AEGP_DeleteStream(
  AEGP_StreamRefH  streamH);
```

Note: starting with 6.5, deleting a stream while it, or any of its child streams, is selected drives the current composition selection to NULL.
