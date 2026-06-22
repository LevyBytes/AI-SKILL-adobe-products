# Crypto, Data Storage, Data Transfers

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Crypto; window.crypto; Data Storage; window.Blob.

## Crypto

For complete API coverage, open [Crypto API](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/crypto/crypto.md).

## window.crypto

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Crypto)
- [https://w3c.github.io/webcrypto/#Crypto-method-getRandomValues](https://w3c.github.io/webcrypto/#Crypto-method-getRandomValues)
- [https://w3c.github.io/webcrypto/#Crypto-method-randomUUID](https://w3c.github.io/webcrypto/#Crypto-method-randomUUID)

**Since**: UXP v6.2

### getRandomValues(array)

Creates cryptographically strong random values.

**Returns**: The input 'array' itself, with its current contents overwritten by the newly generated random numbers  
**Throws**:

- `TypedError` If 'array' is not a TypedArray, or if it is either Float32Array or Float64Array
- `DOMException` If 'array' is longer than 65,536 bytes

| Param | Type | Description |
| --- | --- | --- |
| array | `IntegerArray` | Integer-based TypedArray value: one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, or BigUint64Array; Float32Array and Float64Array are excluded. |

### randomUUID()

Creates a new version 4 UUID.

**Returns**: `string` - String containing a randomly generated v4 UUID that is 36 character long

## Data Storage

- [LocalStorage](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-storage/local-storage.md)
- [SessionStorage](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/data-storage/session-storage.md)

## window.Blob

**Since**: UXP v6.3

### Blob(array, [options])

The Blob object is a file-like container for immutable, raw data.
Code can read it as text or binary data; for stream-oriented processing, convert it to [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream).

**Returns**: New Blob object containing the concatenated data from every item in the constructor's array argument.

| Param | Type | Description |
| --- | --- | --- |
| array | `Array` | Iterable object such as an Array that supplies ArrayBuffers, TypedArrays, DataViews, Blobs, strings, or any mix of those elements for inclusion in the Blob. Strings in this context are encoded as UTF-8, not as the usual JavaScript UTF-16 strings. |
| [options] | `Object` | `(optional)` Object that may define any of these properties: |
| [options.type] | `string` | `(optional)` MIME type to store for the blob data. Its default value is the empty string, (""). |
| [options.endings] | `string` | `(optional)` Controls how newline characters (\n) in text data are handled. The default value, transparent, keeps newline characters unchanged in the blob. To use the host system's native newline convention, pass the value native. |

### size : `number`

**Read only**
Blob size in bytes.

### type : `string`

**Read only**
Blob MIME type.

### arrayBuffer()

Read Blob contents as an ArrayBuffer.

**Returns**: `Promise<ArrayBuffer>` Promise resolving to an ArrayBuffer containing the blob's binary data.

### slice([start], [end], [contentType])

Reads the Blob data segment from start through end, excluding end.

**Returns**: `Blob` - New Blob object holding the requested subset from the data in the blob that received this method call.
The original blob stays unchanged.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | `number` | `0` | `(Optional)` Index into the Blob for the first byte that the new Blob includes |
| [end] | `number` | `size` | `(Optional)` Index into the Blob for the first byte that the new Blob excludes |
| [contentType] | `string` | `"\"\""` | `(Optional)` Supplies a [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) string for the file; when detection yields no type, pass empty string. Additional value details are in [Blob.type](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value) |

### stream()

Expose the Blob's contained data as a ReadableStream.

**Returns**: `ReadableStream` - Content of the Blob.

### text()

Read Blob contents as a string.

**Returns**: `Promise<string>` Promise resolving to a string containing the blob's data as text.
The data is always treated as UTF-8.
