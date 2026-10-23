# navigator.clipboard - writeText(text)

Writes text into the clipboard. Use it when implementing cut and copy text behavior.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)  
**Since**: v6.0

| Param | Type | Description |
| --- | --- | --- |
| text | `string` \| `object` | Text string to write, or an object of the form \{"text/plain": "text to set"}. The object format is deprecated and should not be used. |

**Example**

```js
navigator.clipboard.writeText("Hello!");
```
