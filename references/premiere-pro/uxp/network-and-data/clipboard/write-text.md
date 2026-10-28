# navigator.clipboard - writeText(text)

Send text to the clipboard. Use this for cut and copy operations on text.

**Returns**: `Promise`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)  
**Since**: v6.0

| Param | Type | Description |
| --- | --- | --- |
| text | `string` \| `object` | Text string to set, or an object shaped as \{"text/plain": "text to set"}. The object form is planned for deprecation and should not be used. |

**Example**

```js
navigator.clipboard.writeText("Hello!");
```
