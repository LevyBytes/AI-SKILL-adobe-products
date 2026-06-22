# Manifest Response Migration (part 2)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Text layer detail

### Character styles — CHANGED and NEW

Earlier `characterStyles` example:

```json
{
  "fontAvailable": true,
  "fontColor": { "rgb": { "red": 0, "green": 0, "blue": 0 } },
  "fontName": "PostScriptName",
  "fontSize": 12,
  "orientation": "horizontal"
}
```

New `characterStyles` fields:

| Field | Status | Notes |
| --- | --- | --- |
| `font.postScriptName` | CHANGED | Restructured: font info moved into nested `font` object |
| `font.isAvailable` | CHANGED | Renamed from `fontAvailable`, now nested under `font` |
| `fontSize` | same | Now a float (more precision) |
| `fontColor.rgb.{red,green,blue}` | same | value range [0–32768] — compatible |
| `fontAlpha` | NEW | Float 0–1 — character alpha |
| `syntheticBold` | NEW | boolean |
| `syntheticItalic` | NEW | boolean |
| `underline` | NEW | boolean |
| `capsOption` | NEW | string, e.g. `"normal_caps"` |
| `lineHeight` | NEW | float |
| `letterSpacing` | NEW | number |
| `position` | NEW | `{from, to}` — character range this style applies to |

The old per-character `orientation` entry moves to `textOrientation` on the text object.

### Paragraph styles — CHANGED and NEW

The old paragraph style collection was named `paragraphStyles`:

```json
[{ "alignment": "left" }]
```

The renamed collection in the new model is `paragraphAttributes`:

| Field | Status | Notes |
| --- | --- | --- |
| `alignment` | same | string |
| `writingDirection` | NEW | e.g. `"left_to_right"` |
| `firstLineIndent` | NEW | number |
| `startIndent` | NEW | number |
| `endIndent` | NEW | number |
| `spaceBefore` | NEW | number |
| `spaceAfter` | NEW | number |
| `position` | NEW | `{from, to}` — paragraph range |

### Text object top-level — CHANGED and NEW

| Field | Status | Notes |
| --- | --- | --- |
| `content` | same | Text string |
| `textOrientation` | NEW | e.g. `"horizontal"` — moved from per-character-style |
| `missingFonts` | NEW | Array of font names not available on the server |
| `antiAliasing` | NEW | e.g. `"crisp"` |
| `frame` | CHANGED | Restructured from old `text.type` + `text.frameType` fields (see below) |

### Text frame — CHANGED

Old text frame fields:

```json
{
  "type": "area",
  "frameType": "inPath"
}
```

New `frame` object:

```json
{
  "type": "area",
  "bounds": { "top": 0, "left": 0, "bottom": 100, "right": 300 },
  "boundsRaw": { "left": 0, "top": 0, "right": 300, "bottom": 100 },
  "matrix": { "f_xx": 1, "f_xy": 0, "f_yx": 0, "f_yy": 1, "f_tx": 0, "f_ty": 0 },
  "baselineAlignment": { "flag": 0, "minimum": 0 }
}
```

| Sub-field | Status | Notes |
| --- | --- | --- |
| `type` | same | e.g. `"area"` |
| `frameType` | REMOVED | Subsumed by richer `frame` object |
| `bounds` | NEW | Absolute canvas bounds of the text box |
| `boundsRaw` | NEW | Unscaled text box dimensions |
| `matrix` | NEW | 2D affine transform matrix |
| `baselineAlignment` | NEW | `{flag, minimum}` baseline alignment parameters |

## Summary: new vs. changed

### Fully new fields (absent in V1)

- Document metadata newly includes `bounds`, `imageMode`, `depth`, `iccProfile`, `xmp`, `title`, `resolution`, `globalLightingAngle`, `globalLightingAltitude`, `layerFXVisible`, and `pixelScaleFactor`
- `protection` array replaces `locked`
- Per-layer mask data now covers `userMask`, `vectorMask`, and `pixelMask` (restructured from `mask`)
- Per-layer bounds now include `compositeFrame`, `referenceFrame`, and `compositeDimensions`
- `proportionalScaling`, `effects`, and the `layerSettings` block are added
- Extended `blendOptions` fields include `clipped`, `interior`, `fillOpacity`, `knockout`, `channelRestrictions`, and `blendRanges`
- Text data adds `missingFonts`, `antiAliasing`, `textOrientation`, `frame.bounds`, `frame.boundsRaw`, `frame.matrix`, and `frame.baselineAlignment`
- Text warp data is available through the `layerSettings.layerSpecific.textLayerSettings` block
- Character style additions are `fontAlpha`, `syntheticBold`, `syntheticItalic`, `underline`, `capsOption`, `lineHeight`, `letterSpacing`, and `position`
- Paragraph additions are `writingDirection`, `firstLineIndent`, `startIndent`, `endIndent`, `spaceBefore`, `spaceAfter`, and `position`
- Smart object fields now include `isSmartObject`, `isValid`, `smartObjectData.transform`, `ccLibrariesElement`, and `extracted`
- Artboard data now uses the `typeAttributes.artboard` block and adds `artboardPresetName`, `artboardRect`, background color, and `guideIDs`
- Background layers add the `backgroundLayer` flag and `background.canConvertToLayer`; they have no `typeAttributes`
- Adjustment data adds the `adjustments.type` discriminant, plus new adjustment types `curves` and `gradient_map_custom_stops`
- Top-level `version` is new

### Changed fields (present in both, different shape)

- Document field renames include `bitDepth`→`depth`, `iccProfileName`→`iccProfile`, `name`→`title`, and `height`+`width`→`bounds`; `photoshopBuild` is removed
- **Layer type names**: see [taxonomy](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#layer-type-taxonomy)
- **`bounds` shape** changes from `{height,left,top,width}` to `{left,top,right,bottom}`
- `locked` (boolean) → `protection` (array of strings)
- `rotate` → `rotation` (renamed)
- `mask` → `pixelMask` (restructured; `offset.{x,y}` → `offset.{horizontal,vertical}`; `extendOpaque` and `bounds` added)
- **`thumbnail`**: plain string URL → `{mediaType, url}` object
- **Artboard children key**: `children[]` → `layers[]`
- Text `font` restructured: `fontName`/`fontAvailable` → `font.postScriptName`/`font.isAvailable`
- Text paragraph array: `paragraphStyles` → `paragraphAttributes`
- Text frame: `{type, frameType}` → `frame` object with bounds + matrix
- Smart object: flat `{instanceId, linked, name, path, type}` → nested `{isLinked, isValid, smartObjectData: {fileInfo, transform}, extracted}`
- Smart object MIME string `type` → `fileType` short code (e.g. `"ps3"`)
- Adjustment `adjustments` block: per-type keys renamed to snake_case; `type` discriminant added; `vibrance` fields hoisted; `exposure` value renamed to `exposureValue`; `hueSaturation.channels[]` → `hueSaturationAdjustments[]`
