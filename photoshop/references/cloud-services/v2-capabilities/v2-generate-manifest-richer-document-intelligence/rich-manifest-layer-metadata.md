# Rich manifest layer metadata

Manifest responses in V2 expose many per-layer details absent from V1, including composite frame bounds, warp settings, blend-if ranges, CC Libraries linkage, missing-font data, and additional metadata.

V1 manifest data was much thinner, typically covering basics such as name, type, bounds, and blend mode.

V2 adds these fields on each layer:

| Field | Description |
| --- | --- |
| `compositeFrame` | Bounds in canvas space, both absolute and parent-relative |
| `referenceFrame` | Content bounds before transformations |
| `layerSettings.FXRefPoint` | Layer-effects reference point |
| `layerSettings` → `textLayerSettings` | Text warp data, including style, value, perspective, and rotation |
| `blendOptions.blendRanges` | Blend-if color-range information |
| `blendOptions.fillOpacity` | Fill opacity tracked separately from layer opacity |
| `blendOptions.channelRestrictions` | Blend limits per channel |
| `smartObjectData.ccLibrariesElement` | CC Libraries metadata: name, library, stock ID, and license state |
| `text.missingFonts` | Fonts unavailable on the server |
| `text.antiAliasing` | Anti-aliasing method, such as `"crisp"` |
| `text.paragraphAttributes` | Per-paragraph indents, spacing, and writing direction |

These fields appear automatically in `generate-manifest` responses, with no request-side change required.

See [Manifest Response Migration](../../manifest-response-migration.md) for the complete field catalog.
