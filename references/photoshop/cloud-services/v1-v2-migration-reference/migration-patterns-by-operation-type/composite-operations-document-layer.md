# B. Composite operations (document/layer)

**V1 endpoints folded together:**

- `/pie/psdService/renditionCreate` (format conversion)
- `/pie/psdService/documentCreate` (new documents)
- `/pie/psdService/documentOperations` (document and layer ops)

**V2 Endpoint:** `/v2/create-composite`

**Use Cases:**

1. **Format Conversion** - Convert PSD to JPEG/PNG without an `edits` block
2. **Document Creation** - Provide `image` dimensions without a `source`
3. **Document Operations** - Put resize/crop/trim under `edits.document`
4. **Layer Operations** - Put add/move/delete/edit operations under `edits.layers`

**Document field mapping from V1 to V2 (`options.document.*` → `edits.document.*`):**

| V1 (`options.document`) | V2 (`edits.document`) | Notes |
| --- | --- | --- |
| `imageSize` | `resize` | V2 requires width/height as `{unit, value}` objects |
| `canvasSize` | `crop` | V2 uses `bounds: {top, left, right, bottom}` |
| `trim` | `trim` | Name stays the same; V2 uses `trimUpon: "transparent_pixels"` |

**Request Structure Pattern:**

For an existing document, use this image-source excerpt:

```json
{ "image": { "source": { "url": "<URL>" } } }
```

For a new document, provide dimensions and document properties instead of the existing-document source. The following is an abbreviated shape: fill omitted content and choose one value for each `|`-separated alternative before making a request. Comments preserve mode, fill and depth constraints.

```jsonc
{
  "image": {
        "width": 1920,                // For new documents
    "height": 1080,
    "resolution": {"unit": "density_unit", "value": 72},  // Object format required
    "fill": "white",  // Also: "transparent", "background_color" (NOT "backgroundColor" — camelCase is rejected in V2)
                      // Or object: {"solidColor": {"red": 255, "green": 255, "blue": 255}}
    "mode": "rgb",    // Use "grayscale" (not "gray") for grayscale documents
    "depth": 8        // Integer, not string. Valid values depend on mode:
                      // bitmap: 1; grayscale/rgb/hsb: 8, 16, 32; cmyk/lab/multichannel: 8, 16; indexed/duotone: 8
  },
  "edits": {
    "document": {
      "resize": {/* additional content omitted */},
      "crop": {/* additional content omitted */},
      "trim": {/* additional content omitted */}
    },
    "layers": [
      {
        "type": "layer|text_layer|adjustment_layer|smart_object_layer|solid_color_layer",
        "name": "Layer Name",
        "operation": {
          "type": "add|edit|delete",
          "placement": {/* additional content omitted */}
        },
        // Layer-specific properties
      }
    ]
  },
  "outputs": [/* additional content omitted */]
}
```

**Layer Operation Types:**

- `"type": "add"` - Creates a new layer
- `"type": "edit"` - Changes existing layer properties (**required** — edit operations must include the `operation` field; V2 will not infer it)
- `"type": "delete"` - Deletes a layer
- `"type": "move"` - Moves a layer to another position

**Layer lock:** Use `"protection": ["all"]` to lock and `"protection": ["none"]` to unlock; this replaces V1 `"locked": true/false`. When `all` or `none` is used, it must be the only array entry. Individual flags are `transparency`, `composite`, `position`, `artboard_autonest`. For clipping masks, set top-level `"isClipped": true` on the layer rather than `mask.clip`.

## See also

- [Edit Operations](../../edit-operations/reference-index.md)
