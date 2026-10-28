# window.XMLHttpRequest - setRequestHeader(header, data)

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
