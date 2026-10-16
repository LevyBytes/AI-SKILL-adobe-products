# Changed fields (present in both, different shape)

- Document field renames include `bitDepth`→`depth`, `iccProfileName`→`iccProfile`, `name`→`title`, and `height`+`width`→`bounds`; `photoshopBuild` is removed
- **Layer type names**: see [taxonomy](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#layer-type-taxonomy)
- **`bounds` shape** changes from `{height,left,top,width}` to `{left,top,right,bottom}`
- `locked` (boolean) → `protection` (array of strings)
- `rotate` → `rotation` (renamed)
- `mask` → `pixelMask` (restructured; `offset.{x,y}` → `offset.{horizontal,vertical}`; `extendOpaque` and `bounds` added)
- **`thumbnail`**: plain string URL → `{mediaType, url}` object
- **Artboard children key**: `children[]` → `layers[]`
- Text `font` restructured: `fontName`/fontAvailable` → `font.postScriptName`/font.isAvailable`
- Text paragraph array: `paragraphStyles` → `paragraphAttributes`
- Text frame: `{type, frameType}` → `frame` object with bounds + matrix
- Smart object: flat `{instanceId, linked, name, path, type}` → nested `{isLinked, isValid, smartObjectData: {fileInfo, transform}, extracted}`
- Smart object MIME string `type` → `fileType` short code (e.g. `"ps3"`)
- Adjustment `adjustments` block: per-type keys renamed to snake_case; `type` discriminant added; `vibrance` fields hoisted; `exposure` value renamed to `exposureValue`; `hueSaturation.channels[]` → `hueSaturationAdjustments[]`
