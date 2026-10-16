# slice([start], [end], [contentType])

Selects Blob data from start through end, excluding end itself.

**Returns**: `Blob` - A new Blob object that holds the requested subset from the blob on which this method was invoked.
The source blob remains unchanged.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | `number` | `0` | `(Optional)` Index into the Blob indicating the first byte to include in the new Blob |
| [end] | `number` | `size` | `(Optional)` Index into the Blob indicating the first byte that will NOT be included in the new Blob |
| [contentType] | `string` | `"\"\""` | `(Optional)` String containing the file's [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type), or empty string if the type could not be determined. Refer [Blob.type](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value) |
