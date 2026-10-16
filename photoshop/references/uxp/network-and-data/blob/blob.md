# Blob(array, [options])

A Blob is a file-like value containing immutable raw data.
Its contents can be consumed as text, as binary data, or by converting it to a [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) for method-based processing.

**Returns**: A new Blob object containing the combined data from every element supplied to `Blob(array, [options])`.

| Param | Type | Description |
| --- | --- | --- |
| array | `Array` | Iterable object such as an Array, having ArrayBuffers, TypedArrays, DataViews, Blobs, strings, or a mix of any of such elements, that will be put inside the Blob. Note that strings here are encoded as UTF-8, unlike the usual JavaScript UTF-16 strings. |
| [options] | `Object` | `(optional)` Object which may specify any of the following properties: |
| [options.type] | `string` | `(optional)` MIME type of the data that will be stored into the blob. The default value is the empty string, (""). |
| [options.endings] | `string` | `(optional)` How to interpret newline characters (\n) within the contents, if the data is text. The default value, transparent, copies newline characters into the blob without changing them. To convert newlines to the host system's native convention, specify the value native. |
