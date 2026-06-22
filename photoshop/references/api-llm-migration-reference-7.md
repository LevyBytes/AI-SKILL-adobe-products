# Llm Migration Reference (part 7)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Single status check — Document version

**Document version:** 1.22
**Created on:** October 29, 2025
**Updated last:** May 28, 2026

**Coverage:**

- Migration guides gathered into one consolidated set
- Artboard migration details for images/source structure, artboardSpacing, validation rules, and common issues
- Execute-actions coverage for ActionJSON stringification, the additionalContents rename, and resource limits
- Endpoint mapping coverage, with depth blur called out as not yet supported
- Storage options reference with ACP clarification and CC path rules that disallow a leading slash
- Issue-and-solution reference material
- Examples that show code transformations
- Checklists used for validation
- Patterns for LLM interaction
- v2-whats-new.md: API-first restructuring. The execute-actions material covers running UXP scripts, UXP adhoc output through scriptOutputPattern, and published action files; generate-manifest covers artboard type, smart object extraction, and rich layer metadata; create-composite covers the reworked smart object API, SVG support, linked smart-object resize behavior, text rendering engine changes, new character styles, group layers, and ICC profiles. It also includes architectural improvements (TODOs), a storage options callout, and removal notes for granular protection, multiple outputs, and atomic multi-op sections.
- v2-api-catalog.md: per-endpoint behavioral comparison plus a breaking-changes checklist
- XMP with Masks migration patterns for V1 → V2
- XMP with Orientation override as a new V2 capability
- Clarifications for Creative Cloud Storage (ACP)
- Processing order for layers: V2 top-down and V1 bottom-up
- `additionalContents` / `__ADDITIONAL_CONTENTS_PATH_0__` in place of `additionalImages`; placeholder mapping from V1 `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_${index}` and `PEGASUS_ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_${index}` to `__ADDITIONAL_CONTENTS_PATH_${index}__`
- UXP object syntax paired with the `plugin-temp:/` output path
- `scriptOutputPattern` hosted destination shape: `{"validityPeriod": 3600}`
- Formatting for the `resolution` object, integer `depth`, and `"grayscale"` mode name
- Replacement of `locked`/`isLocked` by the `protection` array, plus `group_layer` type
- Explicit `operation.type: "edit"` requirement instead of inferred edits
- `referenceLayer` as the relative-placement field in place of `relativeTo`
- Pixel mask topics, including `pixelMask`, `offset.horizontal`/`offset.vertical`, `userMask`, `isClipped`, and `pixelMask.delete` for removal on edit layer types
- Font color limits: rgb/cmyk/gray 0–32768, lab `l` 0–32768, and lab `a`,`b` -16384–16384
- Export-layer rules for `cropMode`, `layer_bounds` single-layer use, PSD restrictions, and defaults
- ICC profile behavior for standard/custom profiles, CMYK through custom profiles, and PSDC restrictions
- Validation tables for color mode and bit depth on each export path
- Cloud PSD mediaType value `document/vnd.adobe.cpsd+dcxucf`
- Manifest response updates: renamed layer types such as `background_layer`, removal of `typeAttributes` from background entries, changed bounds format, thumbnail object details, artboard `layers[]` key, and document field renames
- Composite API V1→V2 field-level diff for all 4 V1 endpoints, all 7 layer types, and output formats
- Artboard API V1→V2 field-level diff for input restructure, storage mapping, quality/compression enums, crop mode, and status response
- Artboard visibility behavior change: V1 renders the full canvas while ignoring artboard container visibility; V2 honors that visibility, drops hidden artboards, and reduces output dimensions to visible content
- Adjustment-layer migration items: required `adjustments.type` discriminant, type mapping table, `exposureValue` rename, hue/sat `hueSaturationAdjustments[]` restructure, `localRange`, parameter ranges, and omitted `transformMode`
- Text-layer migration items: off-by-one handling for character-style ranges (V1 `to`=length → V2 `apply.to`=inclusive end index), `font.postScriptName`, area/point `text.frame` types, bounds conversion, font options rename, and `textOrientation`
- Smart-object migration items: `smartObject.smartObjectFile.source.url`, `isLinked`, resize-with-linked-SO rasterization behavior, SVG support, and source file types (PSD, JPEG, PNG, TIFF, SVG, AI, PDF); V2 adds SVG and AI, and AI requires Create PDF Compatible File in Illustrator
- `/pie/psdService/text` migration: because V2 lacks a declarative equivalent, use `execute-actions` with ActionJSON for fixed edits or UXP for conditional/iterative logic; decision table included
- Blend-mode field location: most layers use top-level `opacity`/`blendMode`, while `smart_object_layer` uses `blendOptions`
- Layer-transform rules: V1 `bounds` becomes V2 `transform {offset, dimension}` with required `transformMode: "custom"`; `transform` is invalid with `fit`/`fill`/`none` and returns 400; fit/fill place at (0,0), so custom position needs a second request; dimension/angle/skew uses a geometry pass followed by setOffset, with priority offset > alignment > restore original; anchor default is (0,0)
- Alignment migration: move V1 layer-level values to V2 placement-level `horizontalAlignment`/`verticalAlignment` under `placement.type: "custom"`
- Document creation `fill` change: `"backgroundColor"` becomes `"background_color"`; object form is `{solidColor:{...}}`; depth-by-mode table

## Single status check — Composite API (`/v2/create-composite`) — key breaking changes reference

This reference groups the major breaking changes that affect the four V1 composite-family endpoints: `documentCreate`, `documentOperations`, `renditionCreate`, and `smartObject`.

For the full authoritative diff at field level, see
[Create Composite V1 field reference](api-create-composite-v1-reference.md).

### V1 endpoint to V2 mapping

The V2 destination for all four V1 endpoints is `POST /v2/create-composite`.

| V1 Endpoint | Purpose |
| --- | --- |
| `documentCreate` | Create new blank PSD |
| `documentOperations` | Document ops + layer manipulation |
| `renditionCreate` | Export to JPEG/PNG/PSD/TIFF |
| `smartObject` | Smart object operations |

### Top-level request envelope

| V1 | V2 |
| --- | --- |
| `inputs[].href` + `storage` | `image.source.url` |
| `options.document.*` | `image.*` (top-level) |
| `options.layers[]` | `edits.layers[]` |
| `options.*` (doc ops) | `edits.document.*` |
| `options.document.imageSize` | `edits.document.resize` |
| `options.document.canvasSize` | `edits.document.crop` |
| `options.document.trim` | `edits.document.trim` |
| `outputs[].href` | `outputs[].destination.url` |
| `outputs[].type` | `outputs[].mediaType` |

**Layer processing order:** V1 processes bottom-up, meaning last first; V2 runs top-down, meaning first first. In V2, referenced layers have to be earlier in the array.

### Layer type renames

| V1 `type` | V2 `type` |
| --- | --- |
| `"adjustmentLayer"` | `"adjustment_layer"` |
| `"backgroundLayer"` | `"background_layer"` (supports add, edit, delete, convert-to-layer; move not supported) |
| `"fillLayer"` | `"solid_color_layer"` |
| `"layer"` | `"layer"` (unchanged) |
| `"layerSection"` | `"group_layer"` |
| `"smartObject"` | `"smart_object_layer"` |
| `"textLayer"` | `"text_layer"` |

### Common layer property changes

| V1 | V2 | Impact |
| --- | --- | --- |
| `locked: true/false` | `protection: ["all"]/["none"]` | Breaking |
| `visible` | `isVisible` | Breaking |
| `blendOptions.opacity` | `opacity` (top-level) | Breaking: de-nested |
| `blendOptions.blendMode` | `blendMode` (top-level) | Breaking: de-nested |
| `bounds: {left, top, width, height}` | `transform: {offset: {horizontal, vertical}, dimension: {width, height}}` | Breaking |
| `mask.clip: true` | `isClipped: true` (top-level) | Breaking |
| `mask.linked`/`enabled`/`input` | `pixelMask.linked`/`enabled`/`source.url` | Breaking (also: prefix changed from `mask` to `pixelMask`) |
| `fillToCanvas: true` | **Not supported** | Feature gap |

### Text layer critical changes

| Change | V1 | V2 |
| --- | --- | --- |
| Character style range field | `from`, `to` direct on item | `apply.from`, `apply.to` |
| `to` semantics | **Length** | **Inclusive end index** (off-by-one!) |
| Font name | `fontName: "PSName"` | `characterStyle.font.postScriptName` |
| Style wrapping | Direct properties | Inside `characterStyle: {...}` |
| Paragraph style wrapping | Direct properties | Inside `paragraphStyle: {...}` |
| Text frame bounds | Layer-level `bounds` | `text.frame.type: "area"` with `{top, left, right, bottom}` |
| Default frame | Area at (0,0,4,4) | Point frame at canvas center |
| Font options | `options.fonts`, `options.globalFont`, `options.manageMissingFonts` | `fontOptions.additionalFonts`, `.defaultFontPostScriptName`, `.missingFontStrategy` |
| Missing font strategy | `"useDefault"` | `"use_default"` (Breaking: underscore) |
| `lineHeight` | Not supported (always auto) | Supported in `characterStyle`; used when `autoLeading` is `false` |
| `autoLeading` | Not supported | Default: `false`. `true` sets line height to auto (120% of `fontSize`); `false` uses custom `lineHeight` |

### Font color value ranges

V1 allowed 0–65535 on every `fontColor` component. V2 applies smaller maximum values:

| Color Model | V1 Fields | V2 Fields | V1 Range | V2 Range | If V1 value exceeds V2 max |
| --- | --- | --- | --- | --- | --- |
| `rgb` | `red`, `green`, `blue` | `red`, `green`, `blue` | 0–65535 | 0–32768 | Use 32768 |
| `cmyk` | `cyan`, `magenta`, `yellowColor`, `black` | `cyan`, `magenta`, `yellow`, `black` | 0–65535 | 0–32768 | Use 32768 |
| `lab` | `luminance` | `l` | 0–65535 | 0–32768 | Use 32768 |
| `lab` | `a`, `b` | `a`, `b` | 0–65535 | -16384–16384 | Use 16384 |
| `gray` | `gray` | `gray` | 0–65535 | 0–32768 | Use 32768 |

All components must be present; omitted values default to `0`. Usage remains `fontColor.rgb`, `fontColor.cmyk`, `fontColor.lab`, and `fontColor.gray`.

> **TRAP — fontColor and solidColor use different-looking nesting rules:**
>
> - `characterStyle.fontColor` stays wrapped by the color model: `fontColor: {rgb: {red: 0, green: 0, blue: 0}}`
> - `solid_color_layer.fill.solidColor` likewise keeps `rgb`: `solidColor: {rgb: {red: 0, green: 0, blue: 0}}`
>
> Never put fontColor components directly under fontColor. Leave the `rgb` wrapper on `fill.solidColor`; both structures use `{rgb: {...}}` nesting.

**V2 rejects over-limit component values.** Clamp values before request submission:

- Clamp `rgb`, `cmyk`, `gray`, and `lab.l` to **32768**; example: V1 `red: 40000` → V2 `red: 32768`
- Clamp `lab.a` and `lab.b` to **16384**; example: V1 `a: 17000` → V2 `a: 16384`

### Adjustment layer critical changes

| Change | V1 | V2 |
| --- | --- | --- |
| `adjustments.type` | **Not present** (type inferred from key) | **Required** — snake_case enum |
| `brightnessContrast` type | _(implicit)_ | `type: "brightness_contrast"` |
| `hueSaturation` type | _(implicit)_ | `type: "hue_saturation"` |
| `colorBalance` type | _(implicit)_ | `type: "color_balance"` |
| Exposure amount field | `exposure.exposure` | `exposure.exposureValue` |

### Solid color layer critical changes

| V1 | V2 | Impact |
| --- | --- | --- |
| `type: "fillLayer"` | `type: "solid_color_layer"` | Type rename only |
| `fill.solidColor.rgb.red/green/blue` | `fill.solidColor.rgb.red/green/blue` | Unchanged — `rgb` wrapper required in both |

V1 and V2 both use `fill.solidColor.rgb.{red, green, blue}`, so the structure stays the same; only the layer type name is different.

**V1 and V2 (identical structure):**

```json
{ "fill": { "solidColor": { "rgb": { "red": 255, "green": 0, "blue": 0 } } } }
```

If the `rgb` wrapper is absent, the error reads: `"edits.layers[1].fill.solidColor.rgb: rgb is required"`.

> **TRAP — map V1 `fillLayer` to `type: "solid_color_layer"` even when `input.href` is present:**
> A V1 `fillLayer` can carry layer-level `input.href` alongside `fill.solidColor.rgb.*`. V2 `solid_color_layer` has no `input` field, so remove that layer-level `input.href`.
> When V1 `MaskDetails` also contains `mask.input.href`, interpret that reference as a pixel mask; the V2 target field is `pixelMask.source.url`.

### Output format changes

| Feature | V1 | V2 |
| --- | --- | --- |
| JPEG quality | Numeric 1–7 | String enum: `"low"`, `"medium"`, `"high"`, `"maximum"`, `"photoshop_max"` |
| PNG compression | `"small"`, `"medium"`, `"large"` | `"maximum"`, `"medium"`, `"low"` (and more) |
| Storage: external | `"storage": "external"` | `destination: {url: "..."}` |
| Storage: CC | `"storage": "adobe"` | `destination: {creativeCloudPath: "..."}` |
| ICC profile | Not supported | `iccProfile` on output (new) |
| Hosted storage | Not supported | `destination: {validityPeriod: N}` (new) |

### Features missing in V2

| Feature | Notes |
| --- | --- |
| `fillToCanvas` | Not supported |
| Canvas size adjustment | Coming soon |
| Image rotation | Coming soon |
| Trim by color | Not supported |
| TIFF output | Status unclear |

## Single status check — Artboard API (`/v2/create-artboard`) — key breaking changes reference

For the full authoritative diff at field level, see
[Create Artboard V1 field reference](api-create-artboard-v1-reference.md).

### Endpoint

| V1 | V2 |
| --- | --- |
| `POST /pie/psdService/artboardCreate` | `POST /v2/create-artboard` |
| `https://image.adobe.io` | `https://photoshop-api.adobe.io` |

### Request envelope (breaking change)

**V1 input was `options.artboard[]`, not `inputs[]`.** The current artboard-migration.md guide contains an incorrect V1 example that uses `inputs[]`. The real V1 schema used `options.artboard[]`, and V2 removes the enclosing `options` wrapper entirely.

| V1 | V2 |
| --- | --- |
| `options.artboard[n].href` + `storage` | `images[n].source.url` |
| `options` container | Removed entirely |
| Max images: undocumented | Max images: **25** (enforced) |
| _(not in V1)_ | `artboardSpacing` (integer pixels, default 50) |

### Input storage mapping

| V1 `storage` | V2 `source` field |
| --- | --- |
| `"external"` | `source.url` |
| `"adobe"` (CC path) | `source.creativeCloudPath` (no leading slash) |
| `"adobe"` (URN) | `source.creativeCloudFileId` |
| `"acp"` | `source.url` |
| `"azure"` | `source.url` |
| `"dropbox"` | `source.url` |
| `"cclib"` | `source.creativeCloudFileId` |

### Output field changes

| V1 | V2 | Breaking? |
| --- | --- | --- |
| `href` + `storage` | `destination.url` (or CC / hosted / embedded) | Yes |
| `type` | `mediaType` | Yes |
| `quality` 1–7 (number) | `quality` string enum | Yes |
| `compression` `small`/`medium`/`large` | `compression` 10-level enum | Yes |
| `overwrite` | `shouldOverwrite` | Yes (renamed) |
| `trimToCanvas: true` | `cropMode: "document_bounds"` or `"trim_to_transparency"` | Yes |
| `trimToLayer: true` | `cropMode: "layer_bounds"` | Yes |
| _(not in V1)_ | `height` | New |

### JPEG quality mapping

| V1 (number) | V2 (string) |
| --- | --- |
| 7 | `"maximum"` |
| 5–6 | `"high"` |
| 3–4 | `"medium"` |
| 1–2 | `"poor"` / `"very_poor"` |
| _(new)_ | `"photoshop_max"` (recommended default) |

### PNG compression mapping

| V1 | V2 |
| --- | --- |
| `"small"` | `"maximum"` |
| `"medium"` | `"medium"` |
| `"large"` | `"low"` |

### New output formats in V2

V2 adds `document/vnd.adobe.cpsd+dcxucf` (PSDC) and `application/json` (JSON manifest); these did not exist in V1.

### Status response changes

| V1 | V2 |
| --- | --- |
| `outputs[n].status` | `status` (top-level) |
| `outputs[n].created`/`modified` | `createdTime`/`modifiedTime` (top-level) |
| `outputs[n]._links.renditions[m].href` | `result.outputs[n].destination.url` |
| `outputs[n].errors.code` (number) | `errorDetails[n].errorCode` (string) |

## Single status check — Execute Actions API (`/v2/execute-actions`) — key breaking changes reference

For the full authoritative diff at field level, see
[Execute Actions V1 field reference](api-v1-to-v2-2.md).

### Endpoints covered

| V1 | V2 |
| --- | --- |
| `POST /pie/psdService/photoshopActions` | `POST /v2/execute-actions` |
| `POST /pie/psdService/actionJSON` | `POST /v2/execute-actions` |
| `POST /pie/psdService/productCrop` | `POST /v2/execute-actions` (published action) |
| `POST /pie/psdService/splitView` | `POST /v2/execute-actions` (published action) |
| `POST /pie/psdService/sideBySide` | `POST /v2/execute-actions` (published action) |
| `POST /pie/psdService/depthBlur` | Not yet supported (Neural Filters) |
| `POST /pie/psdService/text` | `POST /v2/execute-actions` (ActionJSON or UXP) |
| `POST /pie/psdService/smartObjectV2` | Not execute-actions — use document edit operations |

At the API-visible level, the known missing item is Neural Filters (Depth Blur), which V2 does not yet expose.

### Request envelope (breaking)

| V1 | V2 |
| --- | --- |
| `inputs[0].href` | `image.source.url` |
| `inputs[0].storage: "external"` | _(omit — inferred)_ |
| `inputs[0].storage: "adobe"` (path) | `image.source.creativeCloudPath` |
| `inputs[0].storage: "adobe"` (URN) | `image.source.creativeCloudFileId` |
| `outputs[].href` | `outputs[].destination.url` |
| `outputs[].storage` | `outputs[].destination.storageType` (Azure/Dropbox only) |
| `outputs[].type` | `outputs[].mediaType` |

### ActionJSON format (critical breaking change)

V1 stored `options.actionJSON` as an **array of inline JSON objects**. V2 instead expects a **stringified JSON string** under `options.actions[].source.content` with `contentType: "application/json"`.

> **Array order controls execution.** Photoshop runs actions sequentially, so migration must keep the V1 `options.actionJSON` order exactly when building the V2 stringified content.

```json
// V1
{"options": {"actionJSON": [{"_obj": "convertMode", "to": {"_enum": "colorSpaceMode", "_value": "grayscale"}}]}}

// V2
{"options": {"actions": [{"source": {"content": "[{\"_obj\":\"convertMode\",\"to\":{\"_enum\":\"colorSpaceMode\",\"_value\":\"grayscale\"}}]", "contentType": "application/json"}}]}}
```

### Additional images/contents rename

|  | V1 | V2 |
| --- | --- | --- |
| Field name | `options.additionalImages[]` | `options.additionalContents[]` |
| Item structure | `{href, storage}` | `{source: {url}}` |
| Placeholder | `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` | `__ADDITIONAL_CONTENT_0__` |

Use `__ADDITIONAL_CONTENT_N__`, taking N from the original V1 placeholder index, and do not renumber. V2 still accepts `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_N` for backward compatibility, but the V2 API schema makes `__ADDITIONAL_CONTENT_N__` canonical.

### .atn action source nesting

| V1 | V2 |
| --- | --- |
| `options.actions[].href` | `options.actions[].source.url` |
| `options.actions[].storage` | _(implicit from source field)_ |

V1 allowed only one action per request. V2 permits up to **10 actions** in sequence, including mixed `.atn` files and inline ActionJSON.

### Font options rename

| V1 | V2 |
| --- | --- |
| `options.fonts[]` | `options.fontOptions.additionalFonts[]` (capped at 10) |
| `options.brushes[].href` | `options.brushes[].source.url` |
| `options.patterns[].href` | `options.patterns[].source.url` |

### Stochastic filter validation caveats

Certain Photoshop filter actions rely on an internal random seed; V1 and V2 rendering engines do not use the same seed. For those filters, pixel-diff comparison is **not a valid acceptance test** because semantically identical, correctly migrated ActionJSON can still produce 50–80% pixel differences.

**Known stochastic `_obj` values:**

| ActionJSON `_obj` | Filter Name |
| --- | --- |
| `addNoise` | Add Noise |
| `grain` | Grain |
| `reticulation` | Reticulation |
| `mezzotint` | Mezzotint |
| `pointillize` | Pointillize |
| `clouds` | Clouds |
| `differenceClouds` | Difference Clouds |
| `spatter` | Spatter |
| `sprayedStrokes` | Sprayed Strokes |
| `colorHalftone` | Color Halftone |

**Recommended validation alternatives for stochastic filters:**

- Compare histograms, with channel mean/stddev inside an acceptable delta
- Use Structural Similarity Index (SSIM ≥ threshold)
- Compare mean color per region
- Omit pixel validation and check only response status plus output-file existence

### Removed V1 options

| V1 Field | V2 Status |
| --- | --- |
| `options.costOptimization` | **Removed** — no equivalent |
| `outputs[].includeMetadata` | **Removed** — implicit |
| `outputs[].embedICCProfiles` | **Replaced** by `outputs[].iccProfile` object |

### Output field renames

| V1 | V2 |
| --- | --- |
| `quality` (numeric 1–12) | `quality` (string enum: `"very_poor"`, `"poor"`, `"low"`, `"medium"`, `"high"`, `"maximum"`, `"photoshop_max"`) |
| `compression` (`"small"`/`"medium"`/`"large"`) | `compression` (10-level enum: `"none"` through `"maximum"`) |
| `overwrite` | `shouldOverwrite` |

### Resource limits

| Resource | V1 | V2 |
| --- | --- | --- |
| Actions | 1 | **10** (can mix `.atn` + inline) |
| Additional images/contents | 25 | 25 |
| Brushes | Undocumented | **10** |
| Patterns | Undocumented | **10** |
| Fonts | Undocumented | **10** |
| Outputs | Undocumented | **25** |

**End of LLM Migration Reference Guide**
