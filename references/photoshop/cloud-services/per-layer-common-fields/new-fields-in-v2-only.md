# New fields in V2 only

| Field | Type | Notes |
| --- | --- | --- |
| `protection` | array | Replaces boolean `locked`; e.g. `["none"]`, `["position"]`, `["all"]` |
| `rotation` | number | Replaces `rotate` (renamed) |
| `linked` | array | Linked layer references |
| `userMask` | object | `{density, feather}` — user mask state |
| `vectorMask` | object or null | `{hasMask, bounds}` — vector mask |
| `pixelMask` | object or null | Restructured from old `mask` field |
| `proportionalScaling` | boolean | Lock aspect ratio during transform |
| `effects` | object | Layer effects container |
| `compositeFrame` | object | `{absolute: {l,t,r,b}, relative: {l,t,r,b}}` — canvas-space and parent-relative composite bounds |
| `referenceFrame` | object | `{left, top, right, bottom}` — untransformed layer content bounds |
| `compositeDimensions` | object | `{left, top, right, bottom}` — enclosing artboard/document bounds |
| `layerSettings` | object | Rich settings block (enabled, FXRefPoint, layerSpecific, warp data for text layers) |
