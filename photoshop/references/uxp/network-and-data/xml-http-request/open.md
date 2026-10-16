# window.XMLHttpRequest — open(method, url, [async], [user], [password])

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
