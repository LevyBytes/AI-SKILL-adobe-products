# Sample: single-layer export

**Schema changes (single-layer):** Use `image.source.url` instead of `inputs[].href`; use `outputs[].destination.url` instead of `outputs[].href`; replace `outputs[].type` with `outputs[].mediaType`; keep `outputs[].layers` assigned per output. V2 also allows optional `cropMode` plus string enum values for `quality` / `compression`.

**Layer identifier: mutually exclusive.** Every item in `outputs[].layers[]` must contain **either** `id` or `name`, not both together. V1 accepted both as disambiguation hints, but V2 rejects that shape with: `"Each layer reference must contain exactly one of id or name (not both)."`. When `id` is available, keep it and remove `name`.

**V1 `outputs[].layers[]` with `visible` field:** Some V1 `renditionCreate`/`documentOperations` requests used `outputs[].layers[]` items such as `{id, visible: true}` to decide which layers were included in the composite export. In V2, map those entries to `outputs[].layers[]` as `[{id: N}, ...]`; that selects multi-layer composite export. Do **not** place them under `edits.layers[]`, because that route requires `type` + `operation` and edits layers rather than selecting export content.
