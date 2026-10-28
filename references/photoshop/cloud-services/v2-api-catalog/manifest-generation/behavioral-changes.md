# Behavioral changes

| Behavior | V1 | V2 | Type |
| --- | --- | --- | --- |
| Layer type names | camelCase | snake_case | Breaking Change |
| Bounds format | `{height, left, top, width}` | `{left, top, right, bottom}` | Breaking Change |
| Thumbnail field | String URL (direct S3) | `{mediaType, url}` object (`/v2/short-url/` redirect) | Breaking Change |
| `locked` field | `boolean` | Replaced by `protection` array | Breaking Change |
| `rotate` field | number | Renamed to `rotation` | Renamed |
| `mask` field | `{enabled, linked, offset.x/y, type}` | Renamed to `pixelMask`; `offset.x/y` → `offset.horizontal/vertical` | Breaking Change |
| Artboard type | `layerSection` (same as groups) | `type: "artboard"` with `typeAttributes.artboard` | Net New |
| Artboard children key | `children[]` | `layers[]` | Breaking Change |
| Smart object structure | Flat `{instanceId, linked, name, path, type}` | Nested `{isLinked, isValid, smartObjectData, extracted}` | Breaking Change |
| Smart object MIME type field | `type` string | `smartObjectData.fileInfo.fileType` short code | Breaking Change |
| `extracted.url` on embedded smart objects | Not available | Available | Net New |
| Document `bitDepth` | `bitDepth` | `depth` | Renamed |
| Document `iccProfileName` | `iccProfileName` | `iccProfile` | Renamed |
| Document `name` | `name` | `title` | Renamed |
| Document `photoshopBuild` | Present | Removed | Removed |
| Document XMP | Not available | `document.xmp` | Net New |
| Document resolution | Not available | `document.resolution` | Net New |
| `compositeFrame` / `referenceFrame` per layer | Not available | Available | Net New |
| `layerSettings` block (warp, FXRefPoint) | Not available | Available | Net New |
| `blendRanges` in `blendOptions` | Not available | Available | Net New |
| `ccLibrariesElement` on smart objects | Not available | Available | Net New |
| `options.includeXmp` | Not available | Supported | Net New |
| `options.maximumThumbnailDepth` | Not available | Supported | Net New |
| `options.trimToTransparency` | Not available | Supported | Net New |

For field-by-field migration details, consult [Manifest Response Migration](../../manifest-response-migration.md).
