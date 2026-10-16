# AEGP_SetMaskOutlineVertexInfo

`AEGP_SetMaskOutlineVertexInfo`

Writes the vertex data for a given index.

Vertex 0 behaves specially: its in tangent actually sets the out tangent of the outline's final vertex.

Naturally, which_pointL has to be valid for the mask outline, otherwise the function returns an error.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetMaskOutlineVertexInfo(
  AEGP_MaskOutlineValH mask_outlineH,
  AEGP_VertexIndex which_pointL,
  const AEGP_MaskVertex *vertexP);
```
