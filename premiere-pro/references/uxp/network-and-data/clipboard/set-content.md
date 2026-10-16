# navigator.clipboard — setContent(data)

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
