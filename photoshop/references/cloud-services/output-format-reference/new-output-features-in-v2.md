# New output features in V2

| Feature | Notes |
| --- | --- |
| `iccProfile` on output | `{type: "standard", name: "..."}` or `{type: "custom", ...}` (CMYK supported via custom) |
| `cropMode: "bounds_of_layer"` | Single-layer export only — exports the bounding box of that layer |
| `layers` filter | Supported in both V1 and V2; controls which layers are rendered |
| Up to 25 outputs per request | vs. lower/unspecified V1 limit |

> **Layer identifier: mutually exclusive.** For each `outputs[].layers[]` entry, supply **either** `id` or `name`, never both. V1 accepted both fields as disambiguation hints, but V2 returns this error: `"Each layer reference must contain exactly one of id or name (not both)."`. When `id` exists, keep it and remove `name`.

> **V1 `outputs[].layers[]` with `visible` field:** Some V1 `renditionCreate` and `documentOperations` payloads used `outputs[].layers[]` entries such as `{id, visible: true}` to choose which layers appear in the composite export. Convert those straight to V2 `outputs[].layers[]` as `[{id: N}, ...]`; that form performs multi-layer composite export. Do **not** move them into `edits.layers[]`, because that route requires `type` plus `operation` and edits layers instead of selecting export content.
