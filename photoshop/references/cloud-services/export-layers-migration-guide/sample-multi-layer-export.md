# Sample: multi-layer export

**Schema changes (multi-layer):** PSD output is not currently supported for multi-layer export, so set `mediaType` only to `image/jpeg`, `image/png`, or `image/tiff`. For `cropMode`, use `trim_to_transparency` or `document_bounds`; do not use `layer_bounds`. Supply string enum values for `quality`, such as `maximum` or `photoshop_max`, and for PNG `compression`.
