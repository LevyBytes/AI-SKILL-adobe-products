# 7d. Pixel layers (`layer` → `layer`)

**Type name:** Unchanged (`"layer"`)

Main pixel-layer migrations:

- **Bounds:** Move V1 `bounds: {left, top, width, height}` into V2 `transform: {offset: {horizontal, vertical}, dimension: {width, height}}`
- **Mask:** Map `mask.input` to `pixelMask.source.url`, `mask.linked` to `pixelMask.isLinked`, and `mask.enabled` to `pixelMask.isEnabled`
- **Clipping:** Replace `mask.clip: true` with top-level `isClipped: true`
- **fillToCanvas:** V2 does not support this field
