# navigator.clipboard — setContent(data)

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
