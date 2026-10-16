# navigator.clipboard — write(data)

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
