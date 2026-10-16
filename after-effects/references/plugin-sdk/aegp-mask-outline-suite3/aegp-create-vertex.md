# AEGP_CreateVertex

`AEGP_CreateVertex`

Inserts a vertex at the index position.

Every vertex that previously held an AEGP_VertexIndex at position or higher has its index bumped up by one.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CreateVertex(
  AEGP_MaskOutlineValH  mask_outlineH,
  AEGP_VertexIndex      position);
```

NOTE: Each mask is required to have a minimum of one vertex.
