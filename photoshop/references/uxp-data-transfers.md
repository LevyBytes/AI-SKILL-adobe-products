# Blob, Clipboard, Fetch, Form Data ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: window.Blob; navigator.clipboard — Clipboard(); window.fetch(input, [init]); window.FormData — FormData(); windows.Headers; Data Transfers; window.Request; window.Response.

## window.Blob

**Since**: UXP v6.3

### Blob(array, [options])

A Blob is a file-like value containing immutable raw data.
Its contents can be consumed as text, as binary data, or by converting it to a [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) for method-based processing.

**Returns**: A new Blob object containing the combined data from every element supplied to `Blob(array, [options])`.

| Param | Type | Description |
| --- | --- | --- |
| array | `Array` | Iterable object such as an Array, having ArrayBuffers, TypedArrays, DataViews, Blobs, strings, or a mix of any of such elements, that will be put inside the Blob. Note that strings here are encoded as UTF-8, unlike the usual JavaScript UTF-16 strings. |
| [options] | `Object` | `(optional)` Object which may specify any of the following properties: |
| [options.type] | `string` | `(optional)` MIME type of the data that will be stored into the blob. The default value is the empty string, (""). |
| [options.endings] | `string` | `(optional)` How to interpret newline characters (\n) within the contents, if the data is text. The default value, transparent, copies newline characters into the blob without changing them. To convert newlines to the host system's native convention, specify the value native. |

### size : `number`

**Read only**
Blob size, measured in bytes.

### type : `string`

**Read only**
Blob MIME type.

### arrayBuffer()

Reads the Blob contents as an ArrayBuffer.

**Returns**: `Promise<ArrayBuffer>` Promise resolving to an ArrayBuffer that holds the blob's data in binary form.

### slice([start], [end], [contentType])

Selects Blob data from start through end, excluding end itself.

**Returns**: `Blob` - A new Blob object that holds the requested subset from the blob on which this method was invoked.
The source blob remains unchanged.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | `number` | `0` | `(Optional)` Index into the Blob indicating the first byte to include in the new Blob |
| [end] | `number` | `size` | `(Optional)` Index into the Blob indicating the first byte that will NOT be included in the new Blob |
| [contentType] | `string` | `"\"\""` | `(Optional)` String containing the file's [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type), or empty string if the type could not be determined. Refer [Blob.type](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value) |

### stream()

Reads the data inside the Blob as a ReadableStream.

**Returns**: `ReadableStream` - Blob content.

### text()

Reads Blob contents as a string.

**Returns**: `Promise<string>` Promise resolving to a string containing the blob's data as text.
UTF-8 is always assumed for the data.

## navigator.clipboard — Clipboard()

Constructs a `Clipboard` instance.

Note: 3P plugins using manifest version upto 4 cannot access Clipboard. From manifest version 5, a valid manifest entry is required.;

### navigator.clipboard — setContent(data)

Places data on the clipboard.
Note: This API is non-standard.

**Returns**: `Promise`

| Param | Type | Description |
| --- | --- | --- |
| data | `object` | Data to place in the clipboard. Object keys are mime types; for text content, use `text/plain` as the key. |

**Example**

```js
navigator.clipboard.setContent({ "text/plain": "Hello!" });
```

### navigator.clipboard — getContent()

Retrieves data from the clipboard.
Note: This API is non-standard.

**Returns**: `Promise`  
**Example**

```js
navigator.clipboard.getContent();
```

### navigator.clipboard — write(data)

Writes data into the clipboard. Use it when implementing cut and copy behavior.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write)  
**Since**: v6.0

| Param | Type | Description |
| --- | --- | --- |
| data | `object` | Data to write. |

**Example**

```js
navigator.clipboard.write({ "text/plain": "Hello!" });
```

### navigator.clipboard — writeText(text)

Writes text into the clipboard. Use it when implementing cut and copy text behavior.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)  
**Since**: v6.0

| Param | Type | Description |
| --- | --- | --- |
| text | `string` \| `object` | Text string to write, or an object of the form \{"text/plain": "text to set"}. The object format is deprecated and should not be used. |

**Example**

```js
navigator.clipboard.writeText("Hello!");
```

### navigator.clipboard — read()

Obtains clipboard data.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/read](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/read)  
**Since**: v6.0  
**Example**

```js
navigator.clipboard.read();
```

### navigator.clipboard — readText()

Obtains clipboard text.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText)  
**Since**: v6.0  
**Example**

```js
navigator.clipboard.readText();
```

### navigator.clipboard — clearContent()

Removes the current clipboard contents.
Note: Nonstandard: This is a non-standard method.

**Returns**: `Promise`  
**Since**: v6.0  
**Example**

```js
navigator.clipboard.clearContent();
```

## window.fetch(input, [init])

Requests a network resource.

**Returns**: `Promise<Response>` - resolves with an object of type `Response`.  
**Throws**:

- `TypeError` If init.body is set and init.method is either "GET" or "HEAD".
- `TypeError` If either network error or network time-out occurs after a http request is made.
- `TypeError` If there is a failure in reading files in FormData during posting FormData.

To make `fetch` usable, add the `network.domains` permission to `manifest.json` with this shape.
**Example:**

```json
{
  "permissions": {
    "network": {
      "domains": ["https://www.adobe.com", "https://*.adobeprerelease.com", "wss://*.myplugin.com"]
    }
  }
}
```

**Limitation:**
Starting with UXP v7.4.0, WildCards in top-level domains are not accepted by `permissions.network.domains`.
**Example:**

```json
"domains": [ "https://www.adobe.*", "https://www.*" ]
```

**See**: [Headers](uxp-data-transfers.md), [Request](uxp-data-transfers.md) and [Response](uxp-data-transfers.md)

| Param | Type | Description |
| --- | --- | --- |
| input | `string` \| `Request` | URL string to connect to, or a `Request` object that carries the URL and the init option. |
| [init] | `Object` | `(Optional)` Settings that customize an HTTP request. |
| [init.method] | `string` | Method used for the HTTP request; when omitted, it is "GET". |
| [init.headers] | `Headers` | Headers included with the HTTP request. |
| [init.body] | `string` \| `ArrayBuffer` \| `TypedArray` \| `Blob` \| `FormData` \| `URLSearchParams` | Content body supplied for the HTTP request. |
| [init.credentials] | `string` | Controls whether cookies are sent. The default value is "include". Accepted values: "omit" : cookies are NOT sent. "include" : cookies are sent. |

## window.FormData — FormData()

Use FormData to build key/value pairs for fetch() or XMLHttpRequest.

### window.FormData — append(name, value, fileName)

Adds a key/value pair to FormData.
When the value is ArrayBuffer or TypedArray, both its buffer and the object are copied.
For a File object value, the File object is cloned, but the underlying content is not cloned.
As a result, the File object and its clone share identical content.

**See**: [FormData - append](https://developer.mozilla.org/en-US/docs/Web/API/FormData/append)  
**Since**: v7.3.0

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Pair key string |
| value | `string` \| `ArrayBuffer` \| `TypedArray` \| `File` \| `Blob` | Pair value |
| fileName | `string` | 'Optional' name applied when the value is a File or Blob object. Blob object defaults to "blob"; File object uses the file name from the name property. |

### window.FormData — delete(name)

Deletes every FormData entry whose name matches the provided name.

**See**: [FormData - delete](https://developer.mozilla.org/en-US/docs/Web/API/FormData/delete)  
**Since**: v7.3.0

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Key name to delete |

### window.FormData — entries()

Provides an iterator over every key/value pair stored in FormData.
Each entry has a string object as its key; the associated value is a string or Blob object.

**Returns**: `iterator` - Iterator over FormData key-value entries.  
**See**: [FormData - entries](https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries)  
**Since**: v7.3.0

### window.FormData — get(name)

Retrieves the first value tied to a specified key inside a FormData object.
Use getAll() when multiple values may exist and you need the complete set.

**Returns**: `string` \| `Blob` - Value for the matching specified name, or null if no key matches.  
**See**: [FormData - get](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get)  
**Since**: v7.3.0

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Key name to retrieve |

### window.FormData — getAll(name)

Retrieves every value tied to a specified key inside a FormData object.

**Returns**: `Array` - Array of values for the matching specified name, or an empty list if no key matches.  
**See**: [FormData - getAll](https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll)  
**Since**: v7.3.0

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Key name to retrieve |

### window.FormData — has(name)

Checks whether a FormData object includes a particular key.

**Returns**: `boolean` - True when the specified name is present as a FormData key; false when it is absent.  
**See**: [FormData - has](https://developer.mozilla.org/en-US/docs/Web/API/FormData/has)  
**Since**: v7.3.0

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Key name to test |

### window.FormData — keys()

Provides an iterator over every key in FormData.
String values make up the keys.

**Returns**: `iterator` - Iterator for the keys in FormData.  
**See**: [FormData - keys](https://developer.mozilla.org/en-US/docs/Web/API/FormData/keys)  
**Since**: v7.3.0

### window.FormData — set(name, value, filename)

When entries already use the input name, this operation replaces the first existing entry with the new entry and removes the rest.
If no matching entry exists, it appends a new name/value entry.

**See**: [FormData - set](https://developer.mozilla.org/en-US/docs/Web/API/FormData/set)  
**Since**: v7.3.0

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Field name |
| value | `string` \| `Blob` | Field value. Values that are neither string nor Blob are converted to a string. |
| filename | `string` | Filename sent to the server for a value supplied as a Blob object or File object. Blob object defaults to "blob"; File object uses the file name from the name property. |

### window.FormData — values()

Provides an iterator over every value in FormData.
Each returned item is a string or Blob object.

**Returns**: `iterator` - Iterator for the values in FormData.  
**See**: [FormData - values](https://developer.mozilla.org/en-US/docs/Web/API/FormData/values)  
**Since**: v7.3.0

## windows.Headers

Use the Headers class for HTTP request and response headers.

**Since**: v7.3.0

### Headers([init])

| Param | Type | Description |
| --- | --- | --- |
| [init] | `Headers` \| `Array<{string, string}>` \| `Object` | Existing header data supplied as a `Headers` instance, an array of name-value pairs, or an object literal whose values are strings. |

### append(name, value)

Adds another value to a header already present in a Header object, or creates that header when it is absent.

**See**: [Headers - append](https://developer.mozilla.org/en-US/docs/Web/API/Headers/append)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | HTTP header name |
| value | `string` | HTTP header value |

### delete(name)

Removes the named header from the active headers collection.

**See**: [Headers - delete](https://developer.mozilla.org/en-US/docs/Web/API/Headers/delete)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | HTTP header name |

### get(name)

For a specified name, provides a byte string containing every value for that header in the Headers object.
When the Headers object has no matching header, the result is null.

**Returns**: `string` - Retrieved header value.  
**See**: [Headers - get](https://developer.mozilla.org/en-US/docs/Web/API/Headers/get)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | HTTP header name. |

### has(name)

Reports whether a given header is present in the Headers object.

**Returns**: `boolean` - True when the input name is found in the Headers object.  
**See**: [Headers - has](https://developer.mozilla.org/en-US/docs/Web/API/Headers/has)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | HTTP header name. |

### set(name, value)

Updates an existing header in the Headers object with a new value, or creates the header when it is missing.

**See**: [Headers - set](https://developer.mozilla.org/en-US/docs/Web/API/Headers/set)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | HTTP header name. |
| value | `string` | HTTP header value. |

### forEach(callbackFn, thisArg)

Runs the callback function one time for each key/value pair held by that Headers instance.

**See**: [Headers - forEach](https://developer.mozilla.org/en-US/docs/Web/API/Headers/forEach)

| Param | Type | Description |
| --- | --- | --- |
| callbackFn | `function` | Function invoked for each map entry. It receives the arguments described for this callback. |
| thisArg | `Object` | Value used as `this` while the callback runs. |

### keys()

Provides an iterator object for stepping through all keys held by the Headers instance.

**Returns**: `iterator` - Iterator over header keys.  
**See**: [Headers - keys](https://developer.mozilla.org/en-US/docs/Web/API/Headers/keys)

### values()

Provides an iterator object for stepping through all values held by the Headers instance.

**Returns**: `iterator` - Iterator over header values.  
**See**: [Headers - values](https://developer.mozilla.org/en-US/docs/Web/API/Headers/values)

### entries()

Provides an iterator object for stepping through all key/value pairs held by the Headers instance.

**Returns**: `iterator` - Iterator over header entries.  
**See**: [Headers - entries](https://developer.mozilla.org/en-US/docs/Web/API/Headers/entries)

## Data Transfers

- [Blob](uxp-data-transfers.md)
- [Clipboard](uxp-data-transfers.md)
- [fetch](uxp-data-transfers.md)
- [FormData](uxp-data-transfers.md)
- [Headers](uxp-data-transfers.md)
- [Request](uxp-data-transfers.md)
- [Response](uxp-data-transfers.md)
- [WebSocket](uxp-data-transfers-2.md)
- [XMLHttpRequest](uxp-data-transfers-2.md)

## window.Request

Request class models a request for a resource.

**Since**: v7.3.0

### Request(input, options)

**Throws**:

- `TypeError` If options.body exists and options.method is either "GET" or "HEAD".

| Param | Type | Description |
| --- | --- | --- |
| input | `string` \| `Request` | Resource to fetch. This may be a string containing the resource URL to fetch, or it may be a Request object. |
| options | `Object` | '(Optional)' object with custom request settings to apply. |
| options.method | `string` | HTTP method to use; defaults to "GET". |
| options.headers | `string` \| `Headers` | Headers to include with the request. |
| options.body | `Blob` \| `ArrayBuffer` \| `TypedArray` \| `FormData` \| `string` \| `ReadableStream` \| `URLSearchParams` | Body data to attach to the request. |
| options.credentials | `string` | Credentials mode for the request. Use either "omit" or "include". |
| options.signal | `AbortSignal` | AbortSignal object that can cancel a request. |

### body : `ReadableStream`

**Read only**
ReadableStream object containing the request body contents; returns null when no body is present.

**See**: [Request - body](https://developer.mozilla.org/en-US/docs/Web/API/Request/body)

### bodyUsed : `boolean`

**Read only**
Reports whether the request body has already been read.

**See**: [Request - bodyUsed](https://developer.mozilla.org/en-US/docs/Web/API/Request/bodyUsed)

### credentials : `string`

**Read only**
Controls cookie handling for the user agent. Possible values are:

     "omit": Do not send cookies, and do not accept cookies.
     "include": Send cookies every time.

### headers : `Headers`

**Read only**
Request-linked [Headers](uxp-data-transfers.md) object.

**See**: [Request - headers](https://developer.mozilla.org/en-US/docs/Web/API/Request/headers)

### method : `string`

**Read only**
Method assigned to the Request. Valid choices: "GET", "POST", "HEAD", "PUT", "DELETE" and "OPTIONS".

**See**: [Request - method](https://developer.mozilla.org/en-US/docs/Web/API/Request/method)

### url : `string`

**Read only**
Request URL.

**See**: [Request - url](https://developer.mozilla.org/en-US/docs/Web/API/Request/url)

### arrayBuffer()

Reads the request body, then resolves a Promise with the resulting ArrayBuffer.

**Returns**: `Promise<ArrayBuffer>` Promise that resolves to ArrayBuffer data.  
**See**: [Request - arrayBuffer](https://developer.mozilla.org/en-US/docs/Web/API/Request/arrayBuffer)

### blob()

The request body is read and exposed through a `Promise<Blob>` that resolves with a Blob.

**Returns**: `Promise<Blob>` Promise resolving to a Blob.  
**See**: [Request - blob](https://developer.mozilla.org/en-US/docs/Web/API/Request/blob)

### clone()

Builds a duplicate of the active request object.

**Returns**: `Request` - Request copy.  
**See**: [Request - clone](https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)

### formData()

The request body is consumed and delivered through a `Promise<FormData>` that resolves with a FormData.

**Returns**: `Promise<FormData>` Promise resolving to a FormData.  
**See**: [Request - formData](https://developer.mozilla.org/en-US/docs/Web/API/Request/formData)

### json()

The request body is read, its text is parsed as JSON, and the parsed value is returned through a `Promise<Object>`.

**Returns**: `Promise<Object>` Promise resolving to JSON object.  
**See**: [Request - json](https://developer.mozilla.org/en-US/docs/Web/API/Request/json)

### text()

The request body is decoded with UTF-8 and returned through a `Promise<string>`.

**Returns**: `Promise<string>` Promise resolving to a String.  
**See**: [Request - text](https://developer.mozilla.org/en-US/docs/Web/API/Request/text)

## window.Response

Response is the class used for a resource request result.

**Since**: v7.3.0

### Response([body], [options])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [body] | `string` \| `Blob` \| `ArrayBuffer` \| `TypedArray` \| `FormData` \| `ReadableStream` \| `URLSearchParams` | `null` | Response payload body. |
| [options] | `Object` | `{}` | Additional response configuration to apply. |
| [options.status] | `number` | `200` | Numeric status code for the response. |
| [options.statusText] | `string` |  | Text paired with the status code; default is "". |
| [options.headers] | `Headers` \| `string` | `{}` | Header data to include with the response. |

### body : `ReadableStream`

**Read only**
ReadableStream object containing the body data, or null when the response body is empty.

**See**: [Response - body](https://developer.mozilla.org/en-US/docs/Web/API/Response/body)

### bodyUsed : `boolean`

**Read only**
Reports whether code has already consumed the response body.

**See**: [Response - bodyUsed](https://developer.mozilla.org/en-US/docs/Web/API/Response/bodyUsed)

### headers : `Headers`

**Read only**
[Headers](uxp-data-transfers.md) object linked to the response.

**See**: [Response - headers](https://developer.mozilla.org/en-US/docs/Web/API/Response/headers)

### ok : `boolean`

**Read only**
Reports success when `status` falls in the 200-299 range; otherwise it reports failure.

**See**: [Response - ok](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok)

### status : `number`

**Read only**
HTTP status code for the response.

**See**: [Response - status](https://developer.mozilla.org/en-US/docs/Web/API/Response/status)

### statusText : `string`

**Read only**
Message text for the HTTP status code. Default is "".

**See**: [Response - statusText](https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText)

### url : `string`

**Read only**
Response URL.

**See**: [Response - url](https://developer.mozilla.org/en-US/docs/Web/API/Response/url)

### arrayBuffer()

Consumes the response stream completely and resolves a `Promise<ArrayBuffer>` with an ArrayBuffer.

**Returns**: `Promise<ArrayBuffer>` Promise resolving to an ArrayBuffer.  
**See**: [Response - arrayBuffer](https://developer.mozilla.org/en-US/docs/Web/API/Response/arrayBuffer)

### blob()

Consumes the response stream completely and resolves a `Promise<Blob>` with a Blob.

**Returns**: `Promise<Blob>` Promise resolving to a Blob.  
**See**: [Response - blob](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob)

### clone()

Builds a duplicate of the active response object.

**Returns**: `Response` - Response copy.  
**See**: [Response - clone](https://developer.mozilla.org/en-US/docs/Web/API/Response/clone)

### formData()

Consumes the response stream completely and resolves a `Promise<FormData>` with a FormData.

**Returns**: `Promise<FormData>` Promise resolving to a FormData.  
**See**: [Response - formData](https://developer.mozilla.org/en-US/docs/Web/API/Response/formData)

### json()

The response stream is fully read, the body text is parsed as JSON, and the result is returned through a `Promise<Object>`.

**Returns**: `Promise<Object>` Promise resolving to JSON object.  
**See**: [Response - json](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)

### text()

The response stream is read to completion, decoded with UTF-8, and returned through a `Promise<string>`.

**Returns**: `Promise<string>` Promise resolving to a String.  
**See**: [Response - text](https://developer.mozilla.org/en-US/docs/Web/API/Response/text)

### error()

**Returns**: `Response` - Response object  
**See**: [Response - error](https://developer.mozilla.org/en-US/docs/Web/API/Response/error_static)

### redirect(url, [status])

**Returns**: `Response` - Response object  
**Throws**:

- `RangeError` If status is not one of 301, 302, 303, 307, 308.

**See**: [Response - redirect](https://developer.mozilla.org/en-US/docs/Web/API/Response/redirect_static)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | `string` |  | URL that the new response is to originate from. |
| [status] | `number` | `302` | Status code for the response. Possible values are 301, 302, 303, 307 and 308. |
