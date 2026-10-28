# E. Export layers (single vs multi-layer)

Use `outputs[].layers` on `/v2/create-composite` to export layers. Single-layer and multi-layer exports behave differently.

**Single-Layer Export** - specify exactly one layer in `outputs[].layers`:

- Supports every `cropMode` value: `"layer_bounds"` (default), `"trim_to_transparency"`, `"document_bounds"`
- Supported formats: JPEG, PNG, TIFF, **PSD**; PSD is allowed only for single-layer export
- Default JPEG quality: `photoshop_max`; default PNG compression: `default` (level 6)
- **V1 migration note:** V1 single-layer exports used the document/canvas size. V2 defaults to `"layer_bounds"`, which makes the output match layer size. Set `cropMode: "document_bounds"` explicitly when the V1 dimensions must be preserved.

**Multi-Layer Export** - specify two or more layers in `outputs[].layers`:

- Combines the selected layers into a single raster output
- Supported formats: JPEG, PNG, TIFF; **PSD is NOT supported for multi-layer export**
- `cropMode` accepts `"document_bounds"` (default) and `"trim_to_transparency"`; `"layer_bounds"` returns a validation error
- Quality and compression defaults match single-layer export

**Document Export** - omit `layers` to export the full document:

- `cropMode` accepts `"document_bounds"` (default) and `"trim_to_transparency"`; `"layer_bounds"` returns a validation error

Single-layer: V2 example with cropMode

```json
{
  "image": {
    "source": {
      "url": "<PSD_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<OUTPUT_URL>"
      },
      "mediaType": "image/png",
      "layers": [
        {
          "id": 1096
        }
      ],
      "cropMode": "trim_to_transparency"
    }
  ]
}
```

Multi-layer: V2 example with cropMode (no PSD)

```json
{
  "image": {
    "source": {
      "url": "<PSD_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<OUTPUT_URL>"
      },
      "mediaType": "image/jpeg",
      "layers": [
        {
          "id": 1096
        },
        {
          "id": 996
        }
      ],
      "quality": "maximum",
      "cropMode": "trim_to_transparency"
    }
  ]
}
```

> **Layer identifier: mutually exclusive.** Each `outputs[].layers[]` item must contain **either** `id` or `name`, never both. V1 allowed both as disambiguation hints, but V2 rejects that shape with: `"Each layer reference must contain exactly one of id or name (not both)."`. When `id` is available, keep it and remove `name`.

> **V1 `outputs[].layers[]` with `visible` field:** Some V1 `renditionCreate`/`documentOperations` requests used entries like `{id, visible: true}` in `outputs[].layers[]` to choose layers for composite export. Convert them to V2 `outputs[].layers[]` as `[{id: N}, ...]`; that invokes multi-layer composite export. Do **not** move them into `edits.layers[]`, since that route requires `type` plus `operation` and edits layers instead of selecting export content.
