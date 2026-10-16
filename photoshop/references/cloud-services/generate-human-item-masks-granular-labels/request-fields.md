# Request fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | object | Yes | Input image object with `source` (URL) and `mediaType` fields. |
| `image.source.url` | string | Yes | Input image presigned URL. Max dimensions: 4000 x 4000 px. |
| `image.mediaType` | string | Yes | Media type for the input image. Accepted: `image/jpeg`, `image/png`. |
| `mask` | object | Yes | Subject mask object with `source` (URL) and `mediaType` fields. |
| `mask.source.url` | string | Yes | Presigned URL for the subject mask image. Must be `image/png`. |
| `useGranularLabels` | boolean | No | When set to `true`, returns side-specific masks for bilateral body parts. Defaults to `false`. |
