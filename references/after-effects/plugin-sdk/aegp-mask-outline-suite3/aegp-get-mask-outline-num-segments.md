# AEGP_GetMaskOutlineNumSegments

`AEGP_GetMaskOutlineNumSegments`

From a mask outline pointer, reports how many segments the path contains.

num_segmentsPL is the total number of segments [0...N-1].

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetMaskOutlineNumSegments(
  AEGP_MaskOutlineValH mask_outlineH,
  A_long *num_segmentsPL);
```
