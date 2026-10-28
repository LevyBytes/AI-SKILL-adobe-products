# Image Layer Operations Migration

Use this migration guide when moving image-layer and solid-color-layer requests from the v1 `/documentCreate` and `/documentOperations` endpoints to the v2 `/create-composite` endpoint.

### Overview

The v1 `/pie/psdService/documentCreate` endpoint created documents containing image or fill layers, while `/pie/psdService/documentOperations` added or edited those layer types in existing documents.

In the v2 API, `/v2/create-composite` centralizes those layer actions through the `edits.layers` array.

The covered layer-type mappings are:

- **Image or pixel layer mapping** - V1 `type: "layer"` -> V2 `type: "layer"`
- **Solid-color layer mapping** - V1 `type: "fillLayer"` -> V2 `type: "solid_color_layer"`
