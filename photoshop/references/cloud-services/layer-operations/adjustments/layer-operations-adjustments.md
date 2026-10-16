# Layer Operations Adjustments

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this migration guide to move adjustment layer workflows from the V1 `/documentCreate` and `/documentOperations` endpoints to the V2 `/create-composite` endpoint.

**V1 Endpoints:**

- `/pie/psdService/documentCreate` - Document creation with adjustment layers
- `/pie/psdService/documentOperations` - Adjustment layer additions and edits

**V2 target:** `/v2/create-composite`, using `edits.layers`
