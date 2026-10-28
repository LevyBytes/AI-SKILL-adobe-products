# Layer Operations Background

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this guide when converting background-layer operations from the V1 `/documentOperations` endpoint to the V2 `/create-composite` endpoint.

**V1 Endpoint:**

- `/pie/psdService/documentOperations` - Add, edit, or delete background layers

**V2 Endpoint:** `/v2/create-composite` with `edits.layers`

In a Photoshop document, the background layer is the default layer and behaves differently from normal image layers. V1 refers to it as `type: "backgroundLayer"`; V2 uses the snake_case form `type: "background_layer"`.
