# Smart Object Replace

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

For migrations, map V1 workflows that call `/pie/psdService/smartObject` onto V2's `/v2/create-composite` endpoint.

V1 workflows could also call `/pie/psdService/documentOperations` for smart object layer changes inside broader document operations. [Smart Object Layer Operations](../layer-operations/smart-objects/reference-index.md) covers that route. This page is limited to the dedicated `/psdService/smartObject` endpoint.

V1 exposed `/psdService/smartObject` as a convenience endpoint dedicated to two tasks:

- **Place**: insert a new smart object layer into an existing PSD
- **Replace**: exchange the content of an existing smart object layer

In V2, `/v2/create-composite` performs both tasks through `edits.layers` entries whose `type` is `"smart_object_layer"`.

**V1 Endpoint:** `/pie/psdService/smartObject`

**V2 Endpoint:** `/v2/create-composite`
