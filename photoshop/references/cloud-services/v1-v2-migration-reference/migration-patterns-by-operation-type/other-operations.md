# D. Other operations

**Artboards:**

- **V1:** `image.adobe.io/pie/psdService/artboardCreate` maps to **V2:** `photoshop-api.adobe.io/v2/create-artboard`
- **Input structure:** V1 `inputs[].href` maps to V2 `images[].source.url`, or to `creativeCloudPath`, `creativeCloudFileId`, or `lightroomPath`. V1 `inputs[].storage` is only necessary for Azure/Dropbox outputs; leave it out for normal URLs.
- **Output structure:** Use the common endpoint pattern: `outputs[].href` maps to `outputs[].destination.url`, and `outputs[].type` maps to `outputs[].mediaType`.
- **New V2 parameter:** `artboardSpacing` is an optional integer in pixels, default 50, controlling horizontal spacing between artboards.
- **Validation:** 1-25 images, 1-25 outputs.
- **Source options:** External URL, Creative Cloud Path, Creative Cloud File ID, Lightroom Path.
- **Output formats:** JPEG, PNG, TIFF, PSD, PSDC, JSON manifest (6 formats).
- **Storage options:** Same as other endpoints (External, Hosted, Embedded, Creative Cloud, Azure, Dropbox).
- **Artboard visibility behavior changed (V1 to V2):** With V1 `documentOperations`, setting `visible: false` on an artboard container layer still returns the full original document canvas. V2 `create-composite` respects that visibility state, leaves hidden artboards out of the composite, and sizes the result to visible artboard content. Pixel-comparison tooling will therefore report a size mismatch, such as `2930×4509` in V1 versus `2930×960` in V2 when only one artboard row remains visible. Treat that as intended behavior.

**Manifest:**

- V1: `/pie/psdService/documentManifest`
- V2: `/v2/generate-manifest`
- Pattern: writes the manifest to the requested output destination
- Options: `includeLayerThumbnails`, `includeXmp`, `maximumThumbnailDepth`, `trimToTransparency` (boolean; crops thumbnails to visible pixels; requires `includeLayerThumbnails: true`; adjustment layers or layers without pixel data still produce a blank white canvas thumbnail; this behavior is specific to `/v2/generate-manifest`; for exported-image trimming in `/v2/create-composite` or `/v2/execute-actions`, set `cropMode: "trim_to_transparency"` in output options)
- V1 manifest layer `locked` (boolean) becomes V2 `protection` (array of flags: `none`, `all`, `transparency`, `composite`, `position`, `artboard_autonest`)
- V1 manifest `mask` with `offset.x`/offset.y` becomes V2 `pixelMask` with `offset.horizontal`/offset.vertical`. V2 also adds read-only `hasMask`, `extendOpaque`, and `bounds`, plus editable `enabled` (boolean, default `true`, shows or hides the mask without deleting data) and `linked` (boolean, default `true`, controls whether layer transforms also affect the mask). Density and feather moved to `userMask`: `density` (integer, 0-100, mask opacity level) and `feather` (number, 0-250, pixel softness at the edge). Delete a pixel mask in edit operations with `pixelMask: { "delete": true }`; this is edit-only, invalid on add, and supported by every layer type.
- Clipping mask: V1 `mask.clip` becomes V2 `layerSettings.clippingMask` in the manifest; edit operations use top-level `isClipped: true`.
- **Layer type renames** (manifest response only; V2 edit/create-composite request payloads still use `"type": "layer"` unchanged): `layer` to `pixel_layer`, `textLayer` to `text_layer`, `layerSection` to `group_layer`, `layerSection`(artboard) to `artboard`, `smartObject` to `smart_object_layer`, `fillLayer` to `solid_color_layer`, `adjustmentLayer` to `adjustment_layer`, `backgroundLayer` to `background_layer`
- **`bounds` format changed**: V1 `{height, left, top, width}` becomes V2 `{left, top, right, bottom}`; there is no height/width, so compute them from right-left and bottom-top.
- **`thumbnail` changed**: V1 returned a plain string URL; V2 returns an object `{mediaType, url}`, present only when thumbnails were requested.
- **Artboard children key changed**: V1/groups use `children[]`, while V2 artboards use `layers[]`; recursive traversal must handle both keys.
- Document field renames: `bitDepth` to `depth`, `iccProfileName` to `iccProfile`, `name` to `title`, `height`+`width` to `bounds`; `photoshopBuild` was removed
- See `manifest-response-migration.md` for the full field-by-field response format reference

**Status:**

- V1: service-specific endpoints
- V2: unified `/v2/status/{jobId}`
- The same `jobId` works for every operation type.
