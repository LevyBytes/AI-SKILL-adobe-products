# Blob(array, [options])

A Blob is an immutable, file-like container for raw data. Read it as text or binary data, or use [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) conversion when stream-based processing is needed.

**Returns**: New Blob object containing the concatenated data supplied through the constructor's array argument.

| Param | Type | Description |
| --- | --- | --- |
| array | `Array` | Iterable object such as an Array, containing ArrayBuffers, TypedArrays, DataViews, Blobs, strings, any mixture of those elements, or similar values to place in the Blob. Strings are encoded as UTF-8 here rather than the usual JavaScript UTF-16 string encoding. |
| [options] | `Object` | `(optional)` Object that can define the properties listed below: |
| [options.type] | `string` | `(optional)` MIME type for the data kept in the blob. Defaults to the empty string, (""). |
| [options.endings] | `string` | `(optional)` Controls how newline characters (\n) are handled when the contents are text. The default value, transparent, keeps newline characters unchanged inside the blob. Use native to convert newlines to the host system's native convention. |
