# slice([start], [end], [contentType])

Reads the Blob data segment from start through end, excluding end.

**Returns**: `Blob` - New Blob object holding the requested subset from the data in the blob that received this method call.
The original blob stays unchanged.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | `number` | `0` | `(Optional)` Index into the Blob for the first byte that the new Blob includes |
| [end] | `number` | `size` | `(Optional)` Index into the Blob for the first byte that the new Blob excludes |
| [contentType] | `string` | `"\"\""` | `(Optional)` Supplies a [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) string for the file; when detection yields no type, pass empty string. Additional value details are in [Blob.type](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value) |
