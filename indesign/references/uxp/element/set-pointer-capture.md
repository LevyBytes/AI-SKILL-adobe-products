# window.Element — setPointerCapture(pointerId)

Applies pointer capture to the element. This implementation does not fire the `gotpointercapture` event on the element.

**Throws**:

- `DOMException` When the element is detached from the DOM tree.

**See**: [Element - setPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)  
**Since**: v7.1

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | Unique pointer identifier selected for capture. |

**Example**

Complete example files:

- [pointer-capture.html](../examples/pointer-capture/pointer-capture.html)
- [pointer-capture.js](../examples/pointer-capture/pointer-capture.js)
