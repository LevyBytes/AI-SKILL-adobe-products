# V2 behavior

The V2 `generate-manifest` response expands the layer tree substantially. Layer type strings move to snake_case. Bounds are expressed as `{left, top, right, bottom}`. Thumbnail data is returned as `{mediaType, url}` objects that target `/v2/short-url/` redirects. Artboards now have their own `type: "artboard"` entry with full geometry and preset details. Smart objects include `extracted.url` for downloading embedded content. The document section also adds `xmp`, `resolution`, `globalLightingAngle`, plus additional fields.
