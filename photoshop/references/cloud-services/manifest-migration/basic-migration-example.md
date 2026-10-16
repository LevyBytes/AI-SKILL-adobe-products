# Basic migration example

Both V1 and V2 require explicit opt-in before generating layer thumbnails:

- **V1**: Include `options.thumbnails` with its `type` property
- **V2**: Enable `includeLayerThumbnails: true`; when needed, choose the format through `exportOptions`

**Key differences**

**Input changes:**

- V1 source URL field `inputs[].href` → V2 source URL field `image.source.url`
- V1 input storage field `inputs[].storage` → V2 storage declaration in outputs

**Option changes:**

- V1: `options.thumbnails` object with `type` → V2: `includeLayerThumbnails` boolean plus `exportOptions.mediaType`
- V1: Thumbnail format stored in `options.thumbnails.type` → V2: Thumbnail format moves to `exportOptions.mediaType`
- V1: Layer information is always included → V2: Layer information is always included
- V1: Layer `locked` boolean → V2: Layer `protection` array using flags none, all, transparency, composite, position, artboard_autonest
- V2 adds `includeXmp`, `maximumThumbnailDepth`, and `trimToTransparency`
- Thumbnail generation still requires explicit opt-in in both versions

**Output Structure:**

- V1: Manifest is returned in the response → V2: Manifest is written to the destination supplied in `outputs`
