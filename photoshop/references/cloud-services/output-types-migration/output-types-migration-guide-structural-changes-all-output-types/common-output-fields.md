# Common output fields

These fields are available across output types:

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| `mediaType` | string | Output format (e.g., "image/jpeg") | Yes |
| `destination` | object | Output destination configuration | Yes |
| `width` | integer | Output width in pixels (≥ 0) | No |
| `height` | integer | Output height in pixels (≥ 0) | No |
| `maxWidth` | integer | Maximum width in pixels (≥ 0) | No |
| `resample` | string | Resampling algorithm when resizing to `width`/`maxWidth`. Values: `nearest_neighbor`, `bilinear`, `bicubic`, `bicubic_smoother`, `bicubic_sharper`. Defaults to `bicubic_sharper`. Applies to JPEG, PNG, and TIFF only. | No |
| `shouldTrimToCanvas` | boolean | Trim transparent pixels | No |
| `iccProfile` | object | ICC color profile for color management (JPEG, PNG, TIFF, PSD only; not PSDC) | No |
