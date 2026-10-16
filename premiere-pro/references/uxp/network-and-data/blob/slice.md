# slice([start], [end], [contentType])

Extract data from the Blob between start and end, excluding end.

**Returns**: `Blob` - New Blob object with the selected subset from the blob on which this method was called.
The original blob remains unchanged.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | `number` | `0` | `(Optional)` Byte index in the Blob where the new Blob begins |
| [end] | `number` | `size` | `(Optional)` Byte index in the Blob where inclusion stops; this byte is not part of the new Blob |
| [contentType] | `string` | `"\"\""` | `(Optional)` String with the [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type), or an empty string when the type is unknown. Refer [Blob.type](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value) |
