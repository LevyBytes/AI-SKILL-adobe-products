# AEGP_DeleteMaskFromLayer

`AEGP_DeleteMaskFromLayer`

Suite argument declaration (not a standalone call):

```cpp
AEGP_DeleteMaskFromLayer(
  AEGP_MaskRefH  mask_refH);
```

NOTE: As of 6.5, deleting a mask whose stream (or a child stream) is selected will set the composition's current selection to NULL.
