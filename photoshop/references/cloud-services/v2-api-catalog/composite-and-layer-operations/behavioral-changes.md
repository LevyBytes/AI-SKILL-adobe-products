# Behavioral changes

| Behavior | V1 | V2 | Type |
| --- | --- | --- | --- |
| Endpoint consolidation | Four separate endpoints (`renditionCreate`, `documentCreate`, `documentOperations`, `smartObject`) | Single `/v2/create-composite` | Breaking Change |
| Input field | `inputs[0].href` | `image.source.url` | Breaking Change |
| Operations block | `options` | `edits` | Breaking Change |
| `operation.type` required on layer edits | Not required | Required: `"add"`, `"edit"`, `"delete"`, `"move"` | Breaking Change |
| Layer type names | camelCase (`layerSection`, `textLayer`, etc.) | snake_case (`group_layer`, `text_layer`, etc.) | Breaking Change |
| Processing order | Not strictly defined | Top-down through `edits.layers` array | Breaking Change |
| `referenceLayer` for relative positioning | Not available | Supported | Net New |
| `protection` array | `locked: boolean` | `protection: ["position", "transparency", ...]` | Breaking Change |
| Group layer type name | `layerSection` | `group_layer` | Renamed |
| `isClipped` for clipping masks | Not available | Supported | Net New |
| `pixelMask.delete` to remove a pixel mask | Not available | `pixelMask: { "delete": true }` on edit operations | Net New |
| Multiple outputs per request | Single output | Up to N outputs | Net New |
