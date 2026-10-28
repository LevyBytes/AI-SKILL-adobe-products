# window.XMLHttpRequest - setRequestHeader(header, data)

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
