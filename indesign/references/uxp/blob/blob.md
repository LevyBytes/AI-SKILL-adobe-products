# Blob(array, [options])

The Blob object is a file-like container for immutable, raw data.
Code can read it as text or binary data; for stream-oriented processing, convert it to [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream).

**Returns**: New Blob object containing the concatenated data from every item in the constructor's array argument.

| Param | Type | Description |
| --- | --- | --- |
| array | `Array` | Iterable object such as an Array that supplies ArrayBuffers, TypedArrays, DataViews, Blobs, strings, or any mix of those elements for inclusion in the Blob. Strings in this context are encoded as UTF-8, not as the usual JavaScript UTF-16 strings. |
| [options] | `Object` | `(optional)` Object that may define any of these properties: |
| [options.type] | `string` | `(optional)` MIME type to store for the blob data. Its default value is the empty string, (""). |
| [options.endings] | `string` | `(optional)` Controls how newline characters (\n) in text data are handled. The default value, transparent, keeps newline characters unchanged in the blob. To use the host system's native newline convention, pass the value native. |
