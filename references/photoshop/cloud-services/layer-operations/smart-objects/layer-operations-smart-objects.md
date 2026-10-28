# Layer Operations Smart Objects

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

This guide covers moving smart object layer workflows from V1's `/documentCreate` and `/documentOperations` endpoints to the V2 `/create-composite` endpoint.

V1 also offered `/psdService/smartObject` specifically for smart object place and replace workflows. The scope here is smart object usage through `documentCreate` and `documentOperations`; for the other path, use [Smart Object Replace Migration](../../smart-object-replace-migration/smart-object-replace.md).

**V1 Endpoints:**

- `/pie/psdService/documentCreate` - Build documents that include smart object layers
- `/pie/psdService/documentOperations` - Add smart object layers or change existing ones

**V2 Endpoint:** `/v2/create-composite`, using `edits.layers`
