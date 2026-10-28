# Layer Operations Advanced

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this guide to migrate advanced layer operations from the V1 `/documentOperations` endpoint to the V2 `/create-composite` endpoint, including layer movement, deletion, masking, grouping, and transforms.

**V1 Endpoint:** `/pie/psdService/documentOperations`

**V2 Endpoint:** `/v2/create-composite` with `edits.layers`

**This guide covers these operations:**

- Moving layers
- Deleting layers
- Layer masks (pixel masks)
- Layer groups (layerSection)
- Blend modes and opacity
- Layer transformations
