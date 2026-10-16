# Top-level request envelope

| V1 | V2 |
| --- | --- |
| `inputs[].href` + `storage` | `image.source.url` |
| `options.document.*` | `image.*` (top-level) |
| `options.layers[]` | `edits.layers[]` |
| `options.*` (doc ops) | `edits.document.*` |
| `options.document.imageSize` | `edits.document.resize` |
| `options.document.canvasSize` | `edits.document.crop` |
| `options.document.trim` | `edits.document.trim` |
| `outputs[].href` | `outputs[].destination.url` |
| `outputs[].type` | `outputs[].mediaType` |

**Layer processing order:** V1 processes bottom-up, meaning last first; V2 runs top-down, meaning first first. In V2, referenced layers have to be earlier in the array.
