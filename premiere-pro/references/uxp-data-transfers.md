# Blob, Clipboard, Fetch, Headers ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: window.Blob; navigator.clipboard — Clipboard(); window.fetch(input, [init]); windows.Headers; Data Transfers; window.Request; window.WebSocket — WebSocket(url, protocols).

## window.Blob

**Since**: UXP v6.3

### Blob(array, [options])

A Blob is an immutable, file-like container for raw data. Read it as text or binary data, or use [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) conversion when stream-based processing is needed.

**Returns**: New Blob object containing the concatenated data supplied through the constructor's array argument.

| Param | Type | Description |
| --- | --- | --- |
| array | `Array` | Iterable object such as an Array, containing ArrayBuffers, TypedArrays, DataViews, Blobs, strings, any mixture of those elements, or similar values to place in the Blob. Strings are encoded as UTF-8 here rather than the usual JavaScript UTF-16 string encoding. |
| [options] | `Object` | `(optional)` Object that can define the properties listed below: |
| [options.type] | `string` | `(optional)` MIME type for the data kept in the blob. Defaults to the empty string, (""). |
| [options.endings] | `string` | `(optional)` Controls how newline characters (\n) are handled when the contents are text. The default value, transparent, keeps newline characters unchanged inside the blob. Use native to convert newlines to the host system's native convention. |

### size : `number`

**Read only**
Blob size measured in bytes.

### type : `string`

**Read only**
Blob MIME type.

### arrayBuffer()

Read Blob contents as an ArrayBuffer.

**Returns**: `Promise<ArrayBuffer>` Promise resolving to an ArrayBuffer with the blob's data in binary form.

### slice([start], [end], [contentType])

Extract data from the Blob between start and end, excluding end.

**Returns**: `Blob` - New Blob object with the selected subset from the blob on which this method was called.
The original blob remains unchanged.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | `number` | `0` | `(Optional)` Byte index in the Blob where the new Blob begins |
| [end] | `number` | `size` | `(Optional)` Byte index in the Blob where inclusion stops; this byte is not part of the new Blob |
| [contentType] | `string` | `"\"\""` | `(Optional)` String with the [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type), or an empty string when the type is unknown. Refer [Blob.type](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value) |

### stream()

Access Blob data as a ReadableStream.

**Returns**: `ReadableStream` - Content of the Blob.

### text()

Read Blob contents as a string.

**Returns**: `Promise<string>` Promise resolving to a string containing the blob's data as text.
The data is always treated as UTF-8.

## navigator.clipboard — Clipboard()

Constructs a Clipboard instance.

Note: Clipboard access is unsupported for 3P plugins through manifest version upto 4. Starting with manifest version 5, a valid manifest entry is required.;

### navigator.clipboard — setContent(data)

Place data on the clipboard.
Note: This API is non-standard.

**Returns**: `Promise`

| Param | Type | Description |
| --- | --- | --- |
| data | `object` | Data to keep in the clipboard. Object keys are mime types; use `text/plain` as the key for text data. |

**Example**

```js
navigator.clipboard.setContent({ "text/plain": "Hello!" });
```

### navigator.clipboard — getContent()

Retrieve data from the clipboard.
Note: This API is non-standard.

**Returns**: `Promise`  
**Example**

```js
navigator.clipboard.getContent();
```

### navigator.clipboard — write(data)

Send data to the clipboard. Use this for cut and copy behavior.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write)  
**Since**: v6.0

| Param | Type | Description |
| --- | --- | --- |
| data | `object` | Data to set. |

**Example**

```js
navigator.clipboard.write({ "text/plain": "Hello!" });
```

### navigator.clipboard — writeText(text)

Send text to the clipboard. Use this for cut and copy operations on text.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)  
**Since**: v6.0

| Param | Type | Description |
| --- | --- | --- |
| text | `string` \| `object` | Text string to set, or an object shaped as \{"text/plain": "text to set"}. The object form is planned for deprecation and should not be used. |

**Example**

```js
navigator.clipboard.writeText("Hello!");
```

### navigator.clipboard — read()

Retrieve clipboard data.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/read](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/read)  
**Since**: v6.0  
**Example**

```js
navigator.clipboard.read();
```

### navigator.clipboard — readText()

Retrieve clipboard text.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText)  
**Since**: v6.0  
**Example**

```js
navigator.clipboard.readText();
```

### navigator.clipboard — clearContent()

Remove clipboard content.
Note: Nonstandard: this method sits outside the standard API.

**Returns**: `Promise`  
**Since**: v6.0  
**Example**

```js
navigator.clipboard.clearContent();
```

## window.fetch(input, [init])

Fetch retrieves a network resource.

**Returns**: `Promise<Response>` Promise resolving to a Response object.  
**Throws**:

- `TypeError` When init.method is "GET" or "HEAD" while init.body has a value.
- `TypeError` When a network error or network time-out happens after an http request is made.
- `TypeError` When posting FormData fails because files in FormData cannot be read.

To use `fetch`, add the `network.domains` permission to `manifest.json` as shown here.
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
For UXP v7.4.0 and later, top-level domain WildCards are not valid in `permissions.network.domains`.
**Example:**

```json
"domains": [ "https://www.adobe.*", "https://www.*" ]
```

**See**: [Headers](uxp-data-transfers.md), [Request](uxp-data-transfers.md) and [Response](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/data-transfers/response.md)

| Param | Type | Description |
| --- | --- | --- |
| input | `string` \| `Request` | URL string to connect to, or a Request object containing the URL plus the init option. |
| [init] | `Object` | `(Optional)` Custom settings for an HTTP request. |
| [init.method] | `string` | HTTP request method. Default value is "GET". |
| [init.headers] | `Headers` | HTTP request headers to include. |
| [init.body] | `string` \| `ArrayBuffer` \| `TypedArray` \| `Blob` \| `FormData` \| `URLSearchParams` | Body to include with the HTTP request. |
| [init.credentials] | `string` | Cookie sending flag. Default is "include". Supported values: "omit" : sends no cookies. "include" : sends cookies. |

## windows.Headers

Headers represents HTTP request and response headers.

**Since**: v7.3.0

### Headers([init])

| Param | Type | Description |
| --- | --- | --- |
| [init] | `Headers` \| `Array<{string, string}>` \| `Object` | Existing Headers object, array of name-value pairs, or object literal whose values are strings. |

### append(name, value)

Adds a new value to an existing header in a Header object, or creates that header when it is absent.

**See**: [Headers - append](https://developer.mozilla.org/en-US/docs/Web/API/Headers/append)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | HTTP header name |
| value | `string` | HTTP header value |

### delete(name)

Uses the supplied name to remove that entry from this Header object.

**See**: [Headers - delete](https://developer.mozilla.org/en-US/docs/Web/API/Headers/delete)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | HTTP header name |

### get(name)

For the supplied name, retrieves a byte string containing all matching header values in the Headers object.
When the Headers object has no matching header, the result is null.

**Returns**: `string` - Retrieved header value.  
**See**: [Headers - get](https://developer.mozilla.org/en-US/docs/Web/API/Headers/get)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | HTTP header name. |

### has(name)

Reports whether the Headers object includes the specified header.

**Returns**: `boolean` - True when the input name is present in the Headers object.  
**See**: [Headers - has](https://developer.mozilla.org/en-US/docs/Web/API/Headers/has)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | HTTP header name. |

### set(name, value)

Updates an existing header in the Headers object with a new value, or creates that header when it is absent.

**See**: [Headers - set](https://developer.mozilla.org/en-US/docs/Web/API/Headers/set)

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | HTTP header name. |
| value | `string` | HTTP header value. |

### forEach(callbackFn, thisArg)

Runs a callback once for each stored key/value pair on Headers.

**See**: [Headers - forEach](https://developer.mozilla.org/en-US/docs/Web/API/Headers/forEach)

| Param | Type | Description |
| --- | --- | --- |
| callbackFn | `function` | Function invoked for each map entry. It accepts the following arguments. |
| thisArg | `Object` | Value used as this while the callback executes. |

### keys()

Provides an iterator for walking all keys held by Headers.

**Returns**: `iterator` - Iterator.  
**See**: [Headers - keys](https://developer.mozilla.org/en-US/docs/Web/API/Headers/keys)

### values()

Provides an iterator for walking all values held by Headers.

**Returns**: `iterator` - Iterator.  
**See**: [Headers - values](https://developer.mozilla.org/en-US/docs/Web/API/Headers/values)

### entries()

Provides an iterator for walking every key/value pair held by Headers.

**Returns**: `iterator` - Iterator.  
**See**: [Headers - entries](https://developer.mozilla.org/en-US/docs/Web/API/Headers/entries)

## Data Transfers

- [Blob](uxp-data-transfers.md)
- [Clipboard](uxp-data-transfers.md)
- [fetch](uxp-data-transfers.md)
- [FormData](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/data-transfers/form-data.md)
- [Headers](uxp-data-transfers.md)
- [Request](uxp-data-transfers.md)
- [Response](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/data-transfers/response.md)
- [WebSocket](uxp-data-transfers.md)
- [XMLHttpRequest](uxp-xml-http-request.md)

## window.Request

The Request class models a request for a resource.

**Since**: v7.3.0

### Request(input, options)

**Throws**:

- `TypeError` If options.body is present while options.method is set to "GET" or "HEAD".

| Param | Type | Description |
| --- | --- | --- |
| input | `string` \| `Request` | Identifies the resource to fetch. Accepted forms are: a string containing the URL for the target resource. a Request object. |
| options | `Object` | '(Optional)' object with custom request settings to apply. |
| options.method | `string` | Request method. Default value: "GET". |
| options.headers | `string` \| `Headers` | Headers to include with the request. |
| options.body | `Blob` \| `ArrayBuffer` \| `TypedArray` \| `FormData` \| `string` \| `ReadableStream` \| `URLSearchParams` | Body content to attach to the request. |
| options.credentials | `string` | Request credentials for this request. Use either "omit" or "include". |
| options.signal | `AbortSignal` | AbortSignal object available for aborting the request. |

### body : `ReadableStream`

**Read only**
A ReadableStream object holding the body contents added to the request, or null when no body exists.

**See**: [Request - body](https://developer.mozilla.org/en-US/docs/Web/API/Request/body)

### bodyUsed : `boolean`

**Read only**
Reports whether the request body has already been read.

**See**: [Request - bodyUsed](https://developer.mozilla.org/en-US/docs/Web/API/Request/bodyUsed)

### credentials : `string`

**Read only**
Specifies whether the user agent sends or receives cookies. Possible values are:

     "omit": Do not send or receive cookies.
     "include": Send cookies every time.

### headers : `Headers`

**Read only**
Request-associated [Headers](uxp-data-transfers.md) object.

**See**: [Request - headers](https://developer.mozilla.org/en-US/docs/Web/API/Request/headers)

### method : `string`

**Read only**
Request method. Allowed values: "GET", "POST", "HEAD", "PUT", "DELETE" and "OPTIONS".

**See**: [Request - method](https://developer.mozilla.org/en-US/docs/Web/API/Request/method)

### url : `string`

**Read only**
Request URL.

**See**: [Request - url](https://developer.mozilla.org/en-US/docs/Web/API/Request/url)

### arrayBuffer()

Reads the request body and resolves it through a Promise with an ArrayBuffer.

**Returns**: `Promise<ArrayBuffer>` Promise resolving to an ArrayBuffer.  
**See**: [Request - arrayBuffer](https://developer.mozilla.org/en-US/docs/Web/API/Request/arrayBuffer)

### blob()

Reads the request body and resolves it through a Promise with a Blob.

**Returns**: `Promise<Blob>` Promise resolving to a Blob.  
**See**: [Request - blob](https://developer.mozilla.org/en-US/docs/Web/API/Request/blob)

### clone()

Creates a duplicate of the current request object.

**Returns**: `Request` - Request copy.  
**See**: [Request - clone](https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)

### formData()

Parses the request body into `FormData` and supplies it through a resolving `Promise`.

**Returns**: `Promise<FormData>` Resolves to a `FormData` result.  
**See**: [Request - formData](https://developer.mozilla.org/en-US/docs/Web/API/Request/formData)

### json()

Parses the request body text as JSON, then resolves the returned `Promise` with that parsed value.

**Returns**: `Promise<Object>` Resolves to a parsed JSON value.  
**See**: [Request - json](https://developer.mozilla.org/en-US/docs/Web/API/Request/json)

### text()

Decodes the request body with UTF-8 and resolves the resulting `Promise` with the produced `String`.

**Returns**: `Promise<string>` Resolves to the decoded `String` result.  
**See**: [Request - text](https://developer.mozilla.org/en-US/docs/Web/API/Request/text)

## window.WebSocket — WebSocket(url, protocols)

`WebSocket` is the interface used to open and control a WebSocket connection with a server,
and to exchange data across that connection.
To use `WebSocket`, add the `network.domains` permission to `manifest.json` with this pattern.
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
Starting with UXP v7.4.0, top-level-domain WildCards are unsupported in `permissions.network.domains`.
Example:

```json
"domains": [ "https://www.adobe.*", "https://www.*" ]
```

**Throws**:

- `Error` Thrown when an invalid url or protocols value is supplied.

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | URL used for the connection; the WebSocket server should answer at this URL. |
| protocols | `string` \| `Array<string>` | One protocol identifier, or multiple protocol identifiers in an array. |

**Example**

```js
var ws = new WebSocket("wss://demos.kaazing.com/echo", "wss");
```

### window.WebSocket — readyState : `number`

**Read only**
Represents the WebSocket connection's current state.
It is one of these values:
| Number | Status | Description |
| --- | --- | --- |
| 0 | CONNECTING | Socket has been created, but the connection has not opened yet. |
| 1 | OPEN | The connection is open and can communicate. |
| 2 | CLOSING | The connection is currently closing. |
| 3 | CLOSED | The connection is closed or could not be opened. |

### window.WebSocket — url : `string`

**Read only**
Contains the WebSocket URL after the constructor resolves it.

### window.WebSocket — protocol : `string`

Contains the sub-protocol name selected by the server.
The value matches one of the strings passed through the protocols parameter while constructing the WebSocket object.
When no connection exists, the returned value is an empty string.

### window.WebSocket — bufferedAmount : `number`

**Read only**
Counts the bytes queued by send() calls that have not yet reached the network.
After every queued item has been sent, this value returns to zero.
Closing the connection does not by itself return this value to zero;
continued send() calls will keep increasing it.

### window.WebSocket — binaryType : `string`

Identifies the binary-data format currently received through the WebSocket connection.
Available binary types: "blob", "arraybuffer".

### window.WebSocket — send(data)

Queues the supplied data for transmission to the remote end of the WebSocket connection,
raising bufferedAmount by the byte count needed to hold that data.
When the data cannot be sent, such as when buffering is required but the buffer is full, the socket closes automatically.

| Param | Type | Description |
| --- | --- | --- |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` | Payload for the remote endpoint. |

**Example**

```js
ws.send(new Float32Array([5, 2, 1, 3, 6, -1]));
```

**Example**

```js
ws.send(new Int32Array([5, -1]).buffer);
```

### window.WebSocket — close([code], [reason])

Closes the websocket connection.

**Throws**:

- `Error` Thrown when an invalid code or reason value is supplied.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [code] | `number` | `1000` | Close status code defined by [[https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close(](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close())](<https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close()>). |
| [reason] | `string` |  | Human-readable text giving the close reason. The default value is "". |
