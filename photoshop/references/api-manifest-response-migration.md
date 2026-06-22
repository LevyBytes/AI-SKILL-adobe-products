# Manifest Response Migration (part 1)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

For `/v2/generate-manifest`, this page maps response fields from V1 to V2. To migrate the request you send to the API, use the [Manifest Migration guide](api-manifest-migration.md).

## Overview

V2 manifest responses include much more detail than V1. The differences group into these areas:

| Section | What changed |
| --- | --- |
| [Document-level fields](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#document-level-fields) | Field renames + many new document properties |
| [Layer type taxonomy](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#layer-type-taxonomy) | All type strings renamed to snake_case; artboards promoted to distinct type |
| [Per-layer common fields](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#per-layer-common-fields) | `bounds` format, `blendOptions` extensions, `pixelMask` restructure, `thumbnail` object |
| [Adjustment layers](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#adjustment-layers) | `adjustments.type` discriminant + per-type restructuring |
| [Background layer](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#background-layer) | Type `background_layer`; new sub-fields; no `typeAttributes` |
| [Fill / solid color layer](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#fill--solid-color-layer) | Type rename + vector mask exposure |
| [Artboard structure](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#artboard-structure) | Promoted from `layerSection`, new `typeAttributes`, `layers[]` vs `children[]` |
| [Smart object detail](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#smart-object-detail) | Heavily restructured nested fields |
| [Text layer detail](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#text-layer-detail) | `characterStyles`, `paragraphAttributes` rename, enriched `frame` object |

Every layer `type` string was renamed, for example `"adjustmentLayer"` to `"adjustment_layer"`. Code that branches on `type` needs updates. See [Layer type taxonomy](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#layer-type-taxonomy) for the full rename table.

## Document-level fields

**CHANGED** — Older manifests placed different names inside a `document` sub-object; V2 expands that data in a top-level `document` block.

### Field renames

| Old field name | New field name | Notes |
| --- | --- | --- |
| `bitDepth` | `depth` | Renamed |
| `iccProfileName` | `iccProfile` | Renamed |
| `name` | `title` | Renamed |
| `height` + `width` | `bounds` | Replaced by `{left, top, right, bottom}` object |
| `photoshopBuild` | — | REMOVED |

### New document fields

| Field | Type | Example | Notes |
| --- | --- | --- | --- |
| `bounds` | object | `{left, top, right, bottom}` | Document canvas bounds |
| `imageMode` | string | `"rgb"` | Color mode |
| `depth` | number | `8` | Bit depth per channel |
| `iccProfile` | string | `"sRGB IEC61966-2.1"` | Embedded ICC profile name |
| `xmp` | string | (full XMP XML) | Complete XMP metadata block |
| `title` | string | `"filename.psd"` | Document filename |
| `globalLightingAngle` | number | — | Global light angle for layer effects |
| `globalLightingAltitude` | number | — | Global light altitude for layer effects |
| `layerFXVisible` | boolean | — | Whether layer effects are visible |
| `pixelScaleFactor` | number | — | HiDPI/retina scale factor |
| `resolution` | object | `{value, unit}` | Document resolution (e.g. 72 PPI) |

## Layer type taxonomy

V2 changed every layer type string. Any `switch` statements or `if/else` chains that compare `layer.type` need updates.

**CHANGED** — V2 uses snake_case type names, and artboards no longer share the group type.

| Old type string | New type string | Notes |
| --- | --- | --- |
| `adjustmentLayer` | `adjustment_layer` | All adjustment layers (brightness, curves, levels, etc.) |
| `backgroundLayer` | `background_layer` | Background layer (locked-by-default canvas base) |
| `fillLayer` | `solid_color_layer` | Solid color fill layers |
| `layer` | `layer` | Generic rasterized pixel layers |
| `layerSection` | `group_layer` | Groups / folders |
| `layerSection` (artboard) | `artboard` | Artboards are now a distinct type (see [Artboard structure](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#artboard-structure)) |
| `smartObject` | `smart_object_layer` | Smart objects |
| `textLayer` | `text_layer` | Text layers |

Previously, artboards appeared as `layerSection` nodes, so they could not be separated from ordinary groups by type alone. V2 promotes them to `type: "artboard"` and adds dedicated `typeAttributes.artboard` data.

## Per-layer common fields

### `bounds` — CHANGED format

In V2, `bounds` no longer reports `height`/`width` directly. Compute size from `right - left` and `bottom - top`.

Earlier shape with explicit dimensions:

```json
{ "height": 200, "left": 10, "top": 20, "width": 300 }
```

V2 rectangle-edge shape:

```json
{ "left": 10, "top": 20, "right": 310, "bottom": 220 }
```

### `thumbnail` — CHANGED object shape

The response no longer treats `thumbnail` as a URL-valued string. Update any client path that reads it that way.

Previous representation: bare string value for a pre-signed S3 URL:

```json
"thumbnail": "https://s3.amazonaws.com/..."
```

V2 representation: object containing media type and a short-URL:

```json
"thumbnail": {
  "mediaType": "image/jpeg",
  "url": "https://photoshop-api.adobe.io/v2/short-url/urn:aaid:ps:..."
}
```

Thumbnail data appears only when the request asks for thumbnails. The `url` now points to a `/v2/short-url/` redirect, not to the S3 link itself.

### Children nesting key — CHANGED

- **Old**: nested layer data uses `children[]` at each depth
- **New**: groups keep `children[]`; artboards place their child layers in `layers[]` (see [Artboard structure](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#artboard-structure))

### `blendOptions` — CHANGED (extended)

Earlier `blendOptions` data contained only `{blendMode, opacity}`.

V2 expands `blendOptions` with:

| New field | Type | Notes |
| --- | --- | --- |
| `clipped` | boolean | Clipping mask state |
| `interior` | boolean | Interior effects state |
| `fillOpacity` | number | Fill opacity (0–100), separate from layer opacity |
| `pixelMaskAsGlobalMask` | boolean |  |
| `vectorMaskAsGlobalMask` | boolean |  |
| `transparencyShapesLayer` | boolean |  |
| `knockout` | string | e.g. `"none"` |
| `channelRestrictions` | array | Per-channel blend restrictions |
| `blendRanges` | array | Blend-if ranges |

### `pixelMask` — CHANGED (was `mask`)

In the old response, layer-level mask data sits in `mask`:

```json
"mask": {
  "enabled": true,
  "linked": true,
  "offset": { "x": 0, "y": 0 },
  "type": "layer"
}
```

The new response moves that data into `pixelMask`, which may be either `null` or a populated object:

```json
"pixelMask": {
  "hasMask": true,
  "extendOpaque": true,
  "bounds": { "left": 0, "top": 0, "right": 2100, "bottom": 1500 },
  "enabled": true,
  "linked": true,
  "offset": { "horizontal": 0, "vertical": 0 }
}
```

| Change | Notes |
| --- | --- |
| `mask` → `pixelMask` | Field renamed |
| `type: "layer"` removed | Discriminant removed |
| `extendOpaque` (NEW) | boolean — extend mask opacity |
| `bounds` (NEW) | Mask bounds added `{left,top,right,bottom}` |
| `offset.x` → `offset.horizontal`, `offset.y` → `offset.vertical` | Key names changed |

### Fields removed in V2

| Field | Type | Replacement in V2 |
| --- | --- | --- |
| `locked` | boolean | Replaced by `protection` array |
| `rotate` | number | Replaced by `rotation` (renamed) |
| `mask` | object | Replaced by `pixelMask` (see above) |
| `thumbnail` | string | Replaced by `thumbnail` object `{mediaType, url}` |

### New fields in V2 only

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

## Adjustment layers

**Type rename**: `adjustmentLayer` → `adjustment_layer`

### `adjustments` block — CHANGED (restructured with type discriminant)

In the old shape, each adjustment type is represented by a camelCase sub-object key:

```json
{ "adjustments": { "vibrance": { "saturation": -24, "vibrance": 15 } } }
{ "adjustments": { "brightnessContrast": { "brightness": 18, "contrast": 36 } } }
```

The new shape introduces a snake_case `type` discriminant and changes some nested fields:

```json
{ "adjustments": { "type": "vibrance", "vibrance": 15, "saturation": -24 } }
{ "adjustments": { "type": "brightness_contrast", "brightnessContrast": { "brightness": 18, "contrast": 36 } } }
```

### Per-type change summary

| Type (old key / new `type`) | Key change | Field changes |
| --- | --- | --- |
| `vibrance` / `vibrance` | none | Fields hoisted: `adjustments.vibrance.{saturation,vibrance}` → `adjustments.{vibrance,saturation}` (flat) |
| `exposure` / `exposure` | none | `exposure` value renamed to `exposureValue`; all values now nested under `exposure` sub-object |
| `hueSaturation` / `hue_saturation` | snake_case | `channels[].channel` ("master") → `hueSaturationAdjustments[]`; per-channel ranges use new `localRange` fields |
| `brightnessContrast` / `brightness_contrast` | snake_case | Structure same; key renamed; V2 may add `center` and `useLegacy` |
| `colorBalance` / `color_balance` | snake_case | Structure same; key renamed |
| `levels` / `levels` | none | Fully new structure: `levels.adjustment[]` array with typed `levelsAdjustment` objects |
| — / `curves` | NEW in V2 | Only in new format; `adjustments[]` with `channel` and `curves[{horizontal,vertical}]` |
| — / `gradient_map_custom_stops` | NEW in V2 | Rich gradient with `colorStops`, `transparencyStops`, `interpolation` |

## Background layer

**Type rename**: `backgroundLayer` → `background_layer`

In the new representation, background layers include extra sub-fields that the old response did not provide. Background entries differ from text, group, and adjustment layers because `typeAttributes` is absent.

| Field | Type | Notes |
| --- | --- | --- |
| `backgroundLayer` | boolean | Top-level flag `true` — explicitly marks this as the background layer |
| `background.canConvertToLayer` | boolean | `true` — indicates the background can be promoted to a regular layer |

Example V2 background layer:

```json
{
  "type": "background_layer",
  "id": 1,
  "name": "Background",
  "backgroundLayer": true,
  "background": {
    "canConvertToLayer": true
  }
}
```

## Fill / solid color layer

**Type rename**: `fillLayer` → `solid_color_layer`

### `fill.solidColor.rgb` — unchanged

The old and new formats share the same object layout and 8-bit `0–255` channel range:

```json
{ "red": 255, "green": 0, "blue": 0 }
```

### Vector mask — NEW in V2

The old `fillLayer` response does not expose vector mask details. The new `solid_color_layer` response includes:

```json
{
  "vectorMask": {
    "hasMask": true,
    "bounds": { "left": 0, "top": 0, "right": 500, "bottom": 500 }
  }
}
```

Additional mask offset data can appear under `layerSettings.vectorMask`.

## Artboard structure

For artboards in V2, child layers are stored under `layers[]` instead of `children[]`. Recursive walkers therefore need support for both keys.

### Old format — no distinct artboard type

In the earlier response, an artboard appears as an ordinary `layerSection` node and cannot be distinguished from a regular group:

```json
{
  "type": "layerSection",
  "id": 1,
  "name": "iPhone 16 Pro – 1",
  "children": [ ... ]
}
```

### New format — distinct `artboard` type with rich metadata

```json
{
  "type": "artboard",
  "id": 1,
  "name": "iPhone 16 Pro – 1",
  "typeAttributes": {
    "artboard": {
      "type": "artboard",
      "artboardBackgroundType": 1,
      "artboardPresetName": "iPhone 16 Pro",
      "artboardRect": {
        "type": "classFloatRect",
        "left": 0,
        "top": 0,
        "right": 393,
        "bottom": 852
      },
      "color": {
        "type": "RGBColor",
        "red": 255,
        "grain": 255,
        "blue": 255
      },
      "guideIDs": []
    },
    "layerSection": "layerSectionStart",
    "type": "layerSection"
  },
  "layers": [ ... ]
}
```

### New artboard-specific fields

| Field | Notes |
| --- | --- |
| `typeAttributes.artboard.artboardBackgroundType` | number — background type (0 = transparent, 1 = white, etc.) |
| `typeAttributes.artboard.artboardPresetName` | string — device preset name (e.g. `"iPhone 16 Pro"`) |
| `typeAttributes.artboard.artboardRect` | `{type, left, top, right, bottom}` — artboard geometry |
| `typeAttributes.artboard.color` | `{type, red, grain, blue}` — background color |
| `typeAttributes.artboard.guideIDs` | array — guide IDs associated with the artboard |
| `typeAttributes.layerSection` | `"layerSectionStart"` — dual typing retained for compatibility |
| `typeAttributes.type` | `"layerSection"` — inner discriminant |

### Children key difference

| Format | Children key |
| --- | --- |
| Old (all layers) | `children[]` |
| New (groups) | `children[]` |
| New (artboards) | `layers[]` |

## Smart object detail

### Old `smartObject` block

```json
{
  "instanceId": "16da7404-...",
  "linked": false,
  "name": "foo.psd",
  "path": "foo.psd",
  "type": "image/vnd.adobe.photoshop"
}
```

### New smart object block (heavily restructured)

```json
{
  "isSmartObject": true,
  "isLinked": false,
  "isValid": true,
  "smartObjectData": {
    "type": "smartObject",
    "transform": [x0, y0, x1, y1, x2, y2, x3, y3],
    "fileInfo": {
      "name": "foo.psd",
      "path": "foo.psd",
      "fileType": "ps3",
      "linked": false
    }
  },
  "extracted": {
    "mediaType": "application/octet-stream",
    "url": "https://photoshop-api.adobe.io/v2/short-url/urn:..."
  }
}
```

`extracted` appears only for embedded smart objects, not linked ones. Within `fileInfo`, `ccLibrariesElement` is present only for assets linked from CC Libraries.

### Field-by-field comparison

| Old field | New field | Status | Notes |
| --- | --- | --- | --- |
| `instanceId` | — | REMOVED | Identity now inferred from `fileInfo` |
| `linked` | `isLinked` | CHANGED | Renamed; promoted to top level |
| `name` | `smartObjectData.fileInfo.name` | CHANGED | Moved into nested `fileInfo` |
| `path` | `smartObjectData.fileInfo.path` | CHANGED | Moved into nested `fileInfo` |
| `type` (MIME) | `smartObjectData.fileInfo.fileType` | CHANGED | MIME string replaced by short code (e.g. `"ps3"`, `"unknown"`) |
| — | `isSmartObject` | NEW | Explicit boolean flag |
| — | `isValid` | NEW | Validity state |
| — | `smartObjectData.transform` | NEW | 8-element quad `[x0,y0, x1,y1, x2,y2, x3,y3]` |
| — | `extracted.mediaType` + `.url` | NEW | Download URL for embedded smart object content |
