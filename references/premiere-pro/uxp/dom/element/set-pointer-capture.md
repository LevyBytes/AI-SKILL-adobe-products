# window.Element - setPointerCapture(pointerId)

Applies pointer capture to this element. In this implementation, the element does not receive a `gotpointercapture` event.

**Throws**:

- `DOMException` when the element has no active connection to the DOM.

**See**: [Element - setPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)  
**Since**: v7.1

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | Identifier for the pointer that should be captured. |

**Example**

Complete example files:

- [pointer-capture.html](../../examples/pointer-capture/pointer-capture.html)
- [pointer-capture.js](../../examples/pointer-capture/pointer-capture.js)
