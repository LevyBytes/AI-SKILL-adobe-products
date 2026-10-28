# Layer Operations Text

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this guide when moving text layer operations from the V1 `/documentCreate` and `/documentOperations` endpoints to the unified V2 `/create-composite` endpoint.

**V1 Endpoints:**

- `/pie/psdService/documentCreate` - creates documents that include text layers
- `/pie/psdService/documentOperations` - adds or edits text layers

**V2 Endpoint:** `/v2/create-composite` with text layer operations supplied under `edits.layers`
