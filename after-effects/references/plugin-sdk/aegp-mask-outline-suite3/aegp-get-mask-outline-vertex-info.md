# AEGP_GetMaskOutlineVertexInfo

`AEGP_GetMaskOutlineVertexInfo`

Takes a mask outline pointer plus a point between 0 and the segment total.

On closed mask paths, vertex[0] matches vertex[num_segments].

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetMaskOutlineVertexInfo(
  AEGP_MaskOutlineValH mask_outlineH,
  AEGP_VertexIndex which_pointL,
  AEGP_MaskVertex *vertexP);
```
