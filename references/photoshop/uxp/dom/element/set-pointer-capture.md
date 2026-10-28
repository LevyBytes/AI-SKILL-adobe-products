# window.Element - setPointerCapture(pointerId)

Pointer capture is enabled for this element. In this UXP implementation, `gotpointercapture` is not emitted there.

**Throws**:

- `DOMException` If the element is not connected to the DOM.

**See**: [Element - setPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)  
**Since**: v7.1

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | Unique pointer identifier to capture. |

**Example**

Complete example files:

- [pointer-capture.html](../../examples/pointer-capture/pointer-capture.html)
- [pointer-capture.js](../../examples/pointer-capture/pointer-capture.js)
