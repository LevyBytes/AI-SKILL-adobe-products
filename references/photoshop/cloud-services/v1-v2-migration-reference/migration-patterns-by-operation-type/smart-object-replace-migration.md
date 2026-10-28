# Smart Object Replace migration

**Smart Object Replace:**

- **V1**: `/pie/psdService/smartObject` - endpoint dedicated to smart object placement or replacement inside a PSD
- **V2**: `/v2/create-composite` with `edits.layers` and `type: "smart_object_layer"`
- Key field map: `input.href` to `smartObject.smartObjectFile.source.url`; `add` block to `operation.type: "add"` plus `placement`; implicit replace without `add` to explicit V2 `operation.type: "edit"`
- Placement: `add.insertTop` to `placement.type: "top"`, `insertAbove: {name}` to `placement.type: "above"` plus `referenceLayer: {name}`
- V2 removes several V1 constraints: linked smart objects through `smartObject.isLinked: true`, no 2000×2000 px rasterization cap, and document-level layer scaling through `transformMode` (`"fit"`, `"fill"`, `"custom"`, `"none"`)

> **Implicit smart object type:** V1 requests to `/psdService/smartObject` commonly omit `type: "smartObject"` on the layer object. On that endpoint, any layer carrying an `input` field is treated as a smart object. Convert those layers to `type: "smart_object_layer"`; do not emit `type: "layer"` for them.
