# AEGP_SetDynamicStreamFlag

`AEGP_SetDynamicStreamFlag`

Turns on the named flag for the AEGP_StreamRefH.

Note: flags must be set individually. Undoable if undoableB is TRUE.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetDynamicStreamFlag(
  AEGP_StreamRefH      streamH,
  AEGP_DynStreamFlags  one_flag,
  A_Boolean            undoableB,
  A_Boolean            setB);
```

You can lean on this call to show or hide parameters on the fly, by setting and clearing `AEGP_DynStreamFlag_HIDDEN`. `AEGP_DynStreamFlag_DISABLED`, however, can't be set.
