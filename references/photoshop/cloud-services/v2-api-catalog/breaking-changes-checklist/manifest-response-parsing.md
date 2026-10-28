# Manifest response parsing

- [ ] Compare layer type strings after moving from camelCase to snake_case; background entries should be `background_layer` and omit `typeAttributes`
- [ ] For bounds parsing, stop reading `height`/`width` and derive size from `{left, top, right, bottom}`
- [ ] For thumbnails, parse a `{mediaType, url}` object instead of a plain string
- [ ] Read `pixelMask` instead of `mask`; map `offset.x/y` → `offset.horizontal/vertical`
- [ ] Read the `protection` array instead of the `locked` boolean
- [ ] Traverse artboards through `layers[]`; do not use `children[]`
- [ ] Parse smart objects as nested `smartObjectData.fileInfo.*` data rather than flat data
- [ ] Map document fields: `bitDepth` → `depth`, `iccProfileName` → `iccProfile`, `name` → `title`
