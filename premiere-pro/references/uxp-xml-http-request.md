# Xml Http Request

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

`XMLHttpRequest` objects communicate with servers.
They can fetch data from a URL without requiring a full page refresh.
With that behavior, a Web page can update only part of itself while leaving the user's current activity uninterrupted.

To use `XMLHttpRequest`, add the `network.domains` permission to `manifest.json` with this pattern.

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
Starting with UXP v7.4.0, top-level-domain WildCards are unsupported in `permissions.network.domains`. Example:

```json
"domains": [ "https://www.adobe.*", "https://www.*" ]
```

**Returns**: `XMLHttpRequest` - Creates and returns an `XMLHttpRequest` object.

## window.XMLHttpRequest — responseURL : `string`

**Read only**
Holds the response URL, or an empty string when the URL is null.
If the URL includes a fragment, that fragment is removed; after redirects, the final URL is returned.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseURL);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

## window.XMLHttpRequest — readyState : `number`

**Read only**
Represents the current state of the `XMLHttpRequest` object. The available states are listed below.

     UNSENT(0):           The object has been created.
     OPENED(1):           open() has run successfully.
     `HEADERS_RECEIVED`(2): The response headers have all arrived.
     LOADING(3):          The response body is currently arriving.
     DONE(4):             The transfer finished, or an error occurred while transferring data.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  console.log(xhr.readyState);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

## window.XMLHttpRequest — responseText : `string`

**Read only**
Provides text received from a server after a request is sent.
When readyState is neither LOADING nor DONE, the value is an empty string.

**Throws**:

- `DOMException` InvalidStateError when XMLHttpRequest.responseType is neither "text" nor the empty string "".

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

## window.XMLHttpRequest — responseXML : `Document`

**Read only**
Contains the XML or HTML `Document` received by the request, or
null when the request failed, has not yet been sent, or
when the data cannot be parsed as XML or HTML.

**Throws**:

- `DOMException` Thrown when responseType is neither "document" nor the empty string.

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

## window.XMLHttpRequest — response : `string` \| `ArrayBuffer` \| `Blob` \| `Document` \| `Object`

**Read only**
Provides the response body content.
This value is null when the request has not finished yet or did not succeed.

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

## window.XMLHttpRequest — status : `number`

**Read only**
Reports the response HTTP status code.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.status);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

## window.XMLHttpRequest — statusText : `string`

**Read only**
Contains the response status message.
For readyState values UNSENT or OPENED, the result is an empty string.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.statusText);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

## window.XMLHttpRequest — timeout : `number`

Number of milliseconds allowed for a request before it is automatically terminated.
The default value is 0, meaning no timeout is applied.

## window.XMLHttpRequest — timeout

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

## window.XMLHttpRequest — responseType : `string`

The response data format is controlled by this value.
Supported values:

     "" (Empty string): the default format, equivalent to "text".
     "text"           : text represented as a string.
     "arrayBuffer"    : an ArrayBuffer containing binary data.
     "blob"           : a Blob object containing binary data.
     "document"       : an HTML Document or XML Document selected from the MIME type of the received data.
     "json"           : an object produced by parsing the received data contents as JSON.

## window.XMLHttpRequest — responseType

**Throws**:

- `DOMException` When readyState is LOADING or DONE.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.responseType = "blob";
```

## window.XMLHttpRequest — withCredentials : `boolean`

Reads the current withCredentials value. This flag controls whether cookies accompany an HTTP request.
When set to true, XMLHttpRequest includes cookies; when false, it omits them.
Unlike the specification, this implementation defaults to true.

## window.XMLHttpRequest — withCredentials

**Throws**:

- `DOMException` When readyState is not UNSENT or OPENED, or after send() has been invoked.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```

## window.XMLHttpRequest — upload : `XMLHttpRequestEventUpload`

**Read only**
Use this XMLHttpRequestEventUpload object to observe upload progress.
An upload object can emit the following events for progress monitoring.

     'loadstart'  : the upload has started.
     'progress'   : delivered periodically to report how much progress has occurred so far.
     'abort'      : the upload operation was aborted.
     'error'      : the upload failed because an error occurred.
     'load'       : the upload completed successfully.
     'timeout'    : the upload timed out because no reply arrived within the timeout interval.
     'loadend'    : the upload finished.

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

## window.XMLHttpRequest — abort()

Cancels the request after it has been sent.
Aborting a request moves readyState to UNSENT(0) and changes the request status code to 0.

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

## window.XMLHttpRequest — getAllResponseHeaders()

Provides the response header list after sorting and combining it.
Every header field follows the form [lower cased name]": "[value]"\r\n". Combined values use ", " as the separator.

**Returns**: `string` - The complete response-header collection.  
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

## window.XMLHttpRequest — getResponseHeader(name)

Looks up the supplied field name and returns its matching response-header value.
Header-name matching ignores case.

**Returns**: `string` - The response-header value matching the supplied name.  
**Throws**:

- `TypeError` When no name parameter is supplied.

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

## window.XMLHttpRequest — open(method, url, [async], [user], [password])

Starts a request, or resets an already-created request for reuse.
HTTPS connections currently do not support self-signed certificates.
UXP does not support synchronous requests, so 'async' cannot be false.

**Throws**:

- `DOMException` NotSupportedError when async parameter is false
- `DOMException` TypeError when method or url is missing
- `DOMException` SyntaxError when method is invalid or url cannot be parsed.
- `DOMException` SecurityError when method is CONNECT, TRACE, or TRACK.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| method | `string` |  | HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs. |
| url | `string` |  | String representing the URL to send the request to. |
| [async] | `boolean` | `true` | Optional Boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously. If this value is false, the send() method does not return until the response is received. If true, notification of a completed transaction is provided using event listeners. This must be true if the multipart attribute is true, or an exception will be thrown. |
| [user] | `string` | `null` | Optional user name to use for authentication purposes; by default, this is the null value. |
| [password] | `string` | `null` | Optional password to use for authentication purposes; by default, this is the null value. |

## window.XMLHttpRequest — overrideMimeType(mimetype)

Sets a MIME type to use for interpreting the transferred request data, replacing the response-provided type.
When MIME-type parsing fails, "application/octet-stream" is used for interpretation.

**Throws**:

- `DOMException` When state is LOADING or DONE

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

## window.XMLHttpRequest — setRequestHeader(header, data)

Creates a request header, or adds another value to a request header that already exists.
Forbidden request headers are ignored, and the method simply returns.
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
     Any header beginning with `proxy-` or `sec-`.

**Throws**:

- `DOMException` InvalidStateError when state is not OPENED or send() has already been called.
- `DOMException` SyntaxError when header is not a valid header name or data is not a valid header value.

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

## window.XMLHttpRequest — send([body])

Dispatches the request to the server.
Accepted body values are: Blob, ArrayBuffer, TypedArray, DataView, FormData, or string.
When no body is supplied, null is used by default.

Sending a FormData object has one caveat: files contained in the FormData are read after this method is called.
To upload files exactly as provided, do not alter the file contents or files before the upload to the server finishes. see [XMLHttpRequest.upload](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/data-transfers/xml-http-request.md#module-global-xmlhttprequest-upload).
If file reading fails, the XMLHttpRequest transaction started by this method may abort and fire an error event.

**Throws**:

- `DOMException` InvalidStateError when state is not OPENED or send() has already been called.
- `Error` Body has an unsupported type.

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
