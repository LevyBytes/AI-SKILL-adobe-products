# Schema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | string | Yes | Must be `"standard"` |
| `name` | string | Yes | One of the predefined profile names (see below) |
| `imageMode` | string | No | `"rgb"` or `"grayscale"`. Defaults to `"rgb"` for RGB profiles |

### Schema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | string | Yes | Must be `"custom"` |
| `name` | string | Yes | Descriptive name for the profile (max 255 characters) |
| `source` | object | Yes | File reference with `url` (or Creative Cloud path) |
| `imageMode` | string | No | `"rgb"`, `"grayscale"`, or `"cmyk"` |
