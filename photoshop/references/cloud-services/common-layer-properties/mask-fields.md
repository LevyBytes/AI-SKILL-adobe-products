# Mask fields

| V1 | V2 | Notes |
| --- | --- | --- |
| `mask.clip: true` | `isClipped: true` (top-level on layer) | Breaking: moved out of mask |
| `mask.linked` | `pixelMask.isLinked` | Renamed + prefix changed |
| `mask.enabled` | `pixelMask.isEnabled` | Renamed + prefix changed |
| `mask.input: {href, storage}` | `pixelMask.source.url` | Breaking: restructured |
