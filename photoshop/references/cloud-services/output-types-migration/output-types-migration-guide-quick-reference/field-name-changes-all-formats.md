# Field name changes (all formats)

| v1 Field | v2 Field | Notes |
| --- | --- | --- |
| `outputs[].href` | `outputs[].destination.url` | Placed under the destination object |
| `outputs[].type` | `outputs[].mediaType` | Name updated to make the media meaning explicit |
| `outputs[].storage` | `outputs[].destination.storageType` | May be omitted in V2 |
