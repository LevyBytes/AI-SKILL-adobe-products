# AEGP_GetStreamIndexInParent

`AEGP_GetStreamIndexInParent`

Hands back the index of a given stream measured against its parent stream.

Permitted only for children of AEGP_StreamGroupingType_INDEXED_GROUP

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetStreamIndexInParent(
  AEGP_StreamRefH  streamH,
  A_long           *indexPL);
```

Note

As noted in other places, `AEGP_StreamRefHs` do not survive from one function call to the next.

Reordering, adding, or removing streams may render invalid every `AEGP_StreamRefH` you grabbed earlier.
