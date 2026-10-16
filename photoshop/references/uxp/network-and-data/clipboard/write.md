# navigator.clipboard — write(data)

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
