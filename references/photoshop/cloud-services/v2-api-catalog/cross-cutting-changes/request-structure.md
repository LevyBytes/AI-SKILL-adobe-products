# Request structure

| Element | V1 | V2 |
| --- | --- | --- |
| Input | `inputs[0].href` + `"storage": "external"` | `image.source.url` |
| Storage type discriminant | `"storage": "external"` / `"s3"` / `"azure"` / etc. | Destination object shape carries this implicitly |
| Operations block | `options` | `edits` (for composite/document ops) or top-level fields (for edit ops) |
| Output destination | `outputs[0].href` + `storage` | `outputs[0].destination.url` |
| Output format | `"type": "image/jpeg"` | `"mediaType": "image/jpeg"` |
