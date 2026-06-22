# Web Socket, Xml Http Request

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: window.WebSocket — WebSocket(url, protocols); window.XMLHttpRequest — XMLHttpRequest().

## window.WebSocket — WebSocket(url, protocols)

Use WebSocket to open and control a server connection, then exchange data across that connection.
To use `WebSocket`, add the `network.domains` permission to `manifest.json` as shown below.
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
For UXP v7.4.0 and newer, top-level-domain WildCards are unsupported in `permissions.network.domains`.
Example:

```json
"domains": [ "https://www.adobe.*", "https://www.*" ]
```

**Throws**:

- `Error` If invalid url or protocols is passed

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | URL to which to connect; this should be the URL to which the WebSocket server will respond. |
| protocols | `string` \| `Array<string>` | Either a single protocol string or an array of protocol strings. |

**Example**

```js
var ws = new WebSocket("wss://demos.kaazing.com/echo", "wss");
```

### window.WebSocket — readyState : `number`

**Read only**
The WebSocket connection's current state.
Allowed states:
| Number | Status | Description |
| --- | --- | --- |
| 0 | CONNECTING | Socket has been created. The connection is not yet opened. |
| 1 | OPEN | Connection is open and ready to communicate. |
| 2 | CLOSING | Connection is in the process of closing. |
| 3 | CLOSED | Connection is closed or couldn't be opened. |

### window.WebSocket — url : `string`

**Read only**
The URL after the constructor resolves the WebSocket.

### window.WebSocket — protocol : `string`

The server-selected sub-protocol name.
It matches one of the strings supplied through the protocols parameter when the WebSocket object is created.
When no connection exists, the value is an empty string.

### window.WebSocket — bufferedAmount : `number`

**Read only**
Bytes queued by send() calls that have not yet reached the network.
After all queued data is transmitted, the value returns to zero.
Closing the connection does not zero this value;
continued send() calls keep increasing it.

### window.WebSocket — binaryType : `string`

The binary data type received through the WebSocket connection.
Supported binary types: "blob", "arraybuffer".

### window.WebSocket — send(data)

Queues data for delivery to the peer over the WebSocket connection,
and raises bufferedAmount by the byte count required for that payload.
If delivery cannot proceed, for example because buffering is needed and no buffer space remains, the socket self-closes.

| Param | Type | Description |
| --- | --- | --- |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` | Data to send to the server. |

**Example**

```js
ws.send(new Float32Array([5, 2, 1, 3, 6, -1]));
```

**Example**

```js
ws.send(new Int32Array([5, -1]).buffer);
```

### window.WebSocket — close([code], [reason])

Ends an active WebSocket session.

**Throws**:

- `Error` If invalid code or reason is passed

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [code] | `number` | `1000` | Integer value as per [[https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close(](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close())](<https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close()>). |
| [reason] | `string` |  | Human-readable string explaining why the connection is closing. The default value is "". |

## window.XMLHttpRequest — XMLHttpRequest()

XMLHttpRequest objects exchange data with servers.
They can fetch data from a URL without requiring a full page refresh.
That lets a Web page refresh only part of itself while the user keeps working.

To use `XMLHttpRequest`, add the `network.domains` permission to `manifest.json` as shown below.

** Example **

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
For UXP v7.4.0 and newer, top-level-domain WildCards are unsupported in `permissions.network.domains`. Example:

```json
"domains": [ "https://www.adobe.*", "https://www.*" ]
```

**Returns**: `XMLHttpRequest` - New XMLHttpRequest object

### window.XMLHttpRequest — responseURL : `string`

**Read only**
Response URL, or "" when the URL is null.
If the URL includes a fragment, the fragment is removed before reporting the final URL after redirect handling.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseURL);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

### window.XMLHttpRequest — readyState : `number`

**Read only**
The XMLHttpRequest object's state. The states are listed below.

     UNSENT(0):           Object construction is complete.
     OPENED(1):           open() has run successfully.
     `HEADERS_RECEIVED`(2): Response headers have all arrived.
     LOADING(3):          Response body data is arriving.
     DONE(4):             Transfer finished, or an error occurred while transferring.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  console.log(xhr.readyState);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

### window.XMLHttpRequest — responseText : `string`

**Read only**
Text received from the server after a request is sent.
Until readyState is LOADING or DONE, this returns "".

**Throws**:

- `DOMException` InvalidStateError if XMLHttpRequest.responseType is not set to either the empty string "" or "text".

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
});
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

### window.XMLHttpRequest — responseXML : `Document`

**Read only**
Document holding the XML or HTML returned by the request.
The value is null when the request failed, has not been sent yet, or XML/HTML parsing cannot complete.

**Throws**:

- `DOMException` If responseType is not either the empty string or "document".

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseXML);
  }
};
xhr.open("GET", "https://www.mydocumentserver.com");
xhr.responseType = "document";
xhr.send();
```

### window.XMLHttpRequest — response : `string` \| `ArrayBuffer` \| `Blob` \| `Document` \| `Object`

**Read only**
The response body content.
It is null while the request is incomplete or after an unsuccessful request.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.response);
  }
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

### window.XMLHttpRequest — status : `number`

**Read only**
HTTP response status code.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.status);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

### window.XMLHttpRequest — statusText : `string`

**Read only**
String with the response status message.
When readyState is UNSENT or OPENED for the request, the value is "".

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.statusText);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

### window.XMLHttpRequest — timeout : `number`

Milliseconds allowed for a request before it is terminated automatically.
Default value is 0, meaning no timeout is applied.

### window.XMLHttpRequest — timeout

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.adobe.com");
xhr.ontimeout = (e) => {
  console.log("xhr timed out");
};
xhr.timeout = 2000; // 2,000 milliseconds
xhr.send();
```

### window.XMLHttpRequest — responseType : `string`

Response payloads use this setting to indicate the data format.
The available choices are:

     "" (Empty string): default choice; equivalent to "text".
     "text"           : string text content.
     "arrayBuffer"    : binary data supplied as an ArrayBuffer.
     "blob"           : binary data supplied as a Blob object.
     "document"       : HTML Document or XML Document selected from the received data's MIME type.
     "json"           : Object produced by parsing the received data contents as JSON.

### window.XMLHttpRequest — responseType

**Throws**:

- `DOMException` If readyState is either LOADING or DONE.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.responseType = "blob";
```

### window.XMLHttpRequest — withCredentials : `boolean`

Use withCredentials to read whether cookie credentials accompany an HTTP request.
With the value set to true, XMLHttpRequest includes cookies; with any other value, cookies are left out.
Unlike the specification, true is the default.

### window.XMLHttpRequest — withCredentials

**Throws**:

- `DOMException` If readyState is neither UNSENT nor OPENED or send() is invoked.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```

### window.XMLHttpRequest — upload : `XMLHttpRequestEventUpload`

**Read only**
For upload progress tracking, this property exposes an XMLHttpRequestEventUpload object.
These upload-object events are available for progress monitoring.

     'loadstart'  : Upload processing has started.
     'progress'   : Sent at intervals to report how much progress has occurred.
     'abort'      : The upload operation was aborted.
     'error'      : The upload failed because of an error.
     'load'       : The upload completed successfully.
     'timeout'    : The upload timed out because no reply arrived within the timeout interval.
     'loadend'    : Upload lifecycle ended.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.myserver.com");
xhr.upload.onprogress = (e) => {
  console.log(`Uploading ${(e.loaded / e.total) * 100}%`);
};
const arraybuffer = new ArrayBuffer(1024 * 1024);
// fill the arraybuffer with contents.
xhr.send(arraybuffer);
```

### window.XMLHttpRequest — abort()

If the request has already been sent, abort() stops it.
After an abort, readyState becomes UNSENT(0), and the request status code becomes 0 in that state.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onabort = () => {
  console.log("aborted");
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
abortButton.addEventListener("click", () => {
  xhr.abort();
});
```

### window.XMLHttpRequest — getAllResponseHeaders()

The method produces the response header list after sorting and combining it.
Each header field uses the form [lower cased name]": "[value]"\r\n". For combined values, the separator is ", ".

**Returns**: `string` - Complete response header set.  
**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
    console.log(xhr.getAllResponseHeaders());
  }
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

### window.XMLHttpRequest — getResponseHeader(name)

For the supplied field name, this method retrieves the corresponding response-header value.
Header lookup treats the search key without regard to case.

**Returns**: `string` - Matching value from the response header list for the supplied name.  
**Throws**:

- `TypeError` If the name parameter is not provided.

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name to search in response's header list. |

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
    console.log(xhr.getResponseHeader("Content-Type"));
  }
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

### window.XMLHttpRequest — open(method, url, [async], [user], [password])

Use open() to start a new request definition or replace the current one.
HTTPS connections with self-signed certificates are not supported at this time.
UXP requires asynchronous requests, so set 'async' to true.

**Throws**:

- `DOMException` NotSupportedError if async parameter is false
- `DOMException` TypeError if method and url parameters are not provided
- `DOMException` SyntaxError if either method is not valid or url cannot be parsed.
- `DOMException` SecurityError if method matches for CONNECT, TRACE or TRACK.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| method | `string` |  | HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs. |
| url | `string` |  | String representing the URL to send the request to. |
| [async] | `boolean` | `true` | Optional Boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously. If this value is false, the send() method does not return until the response is received. If true, notification of a completed transaction is provided using event listeners. This must be true if the multipart attribute is true, or an exception will be thrown. |
| [user] | `string` | `null` | Optional user name to use for authentication purposes; by default, this is the null value. |
| [password] | `string` | `null` | Optional password to use for authentication purposes; by default, this is the null value. |

### window.XMLHttpRequest — overrideMimeType(mimetype)

overrideMimeType() chooses a MIME type different from the response-declared type for request data interpretation.
When MIME type parsing fails, the data is interpreted with "application/octet-stream".

**Throws**:

- `DOMException` If state is LOADING or DONE

| Param | Type | Description |
| --- | --- | --- |
| mimetype | `string` | MIME type to use instead of the one specified in the response. Since Only UTF-8 is supported for charset of text encoding, MIME type’s parameters "charset" with other values than 'UTF-8' is not valid. |

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.response);
  console.log(xhr.responseText);
};
xhr.open("GET", "https://www.myxmlserver.com");
xhr.overrideMimeType("text/plain");
xhr.send();
```

### window.XMLHttpRequest — setRequestHeader(header, data)

setRequestHeader() creates a request header or adds another value to a header that already exists.
For forbidden request headers, the call returns without changing anything.
These request headers are forbidden.

     `Accept-Charset`
     `Accept-Encoding`
     `Access-Control-Request-Headers`
     `Access-Control-Request-Method`
     `Connection`
     `Content-Length`
     `Cookie`
     `Cookie2`
     `Date`
     `DNT`
     `Expect`
     `Host`
     `Keep-Alive`
     `Origin`
     `Referer`
     `Set-Cookie`
     `TE`
     `Trailer`
     `Transfer-Encoding`
     `Upgrade`
     `Via`
     If header starts with `proxy-` or `sec-`.

**Throws**:

- `DOMException` InvalidStateError if either state is not OPENED or send() is already invoked.
- `DOMException` SyntaxError if a header is not a header name or if data is not a header value.

| Param | Type | Description |
| --- | --- | --- |
| header | `string` | Name of the header whose value is to be set. |
| data | `string` | Value to set as the body of the header. |

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.mywebserver.com");
xhr.setRequestHeader("Accept", "text/xml");
xhr.send();
```

### window.XMLHttpRequest — send([body])

send() transmits the request to the server.
Supported body values include Blob, ArrayBuffer, TypedArray, DataView, FormData, and string.
When body is omitted, null is used as the default value.

FormData has one important caveat when sent this way. Files in the FormData object are read after send() is called.
To upload files unchanged, do not modify either the files or their contents until the server upload is complete. see [XMLHttpRequest.upload](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/xml-http-request.md#module-global-xmlhttprequest-upload).
If file reading fails, this method's XMLHttpRequest transaction may be aborted and dispatches an error event.

**Throws**:

- `DOMException` InvalidStateError if either state is not OPENED or send() is already invoked.
- `Error` Body is not a supported type.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [body] | `*` | `\null` | Body of data to be sent in the request. |

**Example** _(Getting the resource as text)_

```js
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => {
  console.log(xhr.responseText);
});
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

**Example** _(Post request)_

```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.open("POST", "https://www.myserver.com");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("foo=bar&lorem=ipsum");
```
