# redirect(url, [status])

**Returns**: `Response` - Response object  
**Throws**:

- `RangeError` If status is not one of 301, 302, 303, 307, 308.

**See**: [Response - redirect](https://developer.mozilla.org/en-US/docs/Web/API/Response/redirect_static)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | `string` |  | URL that the new response is to originate from. |
| [status] | `number` | `302` | Status code for the response. Possible values are 301, 302, 303, 307 and 308. |
