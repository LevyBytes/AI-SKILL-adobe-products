# createRadialGradient(x0, y0, r0, x1, y1, r1)

Builds a radial gradient from two circular geometries and their positions.

**Returns**: `CanvasGradient` - a radial CanvasGradient configured from that paired circular geometry.  
**Throws**:

- `DOMException`

**See**: [CanvasRenderingContext2D - createRadialGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) for more details

| Param | Type | Description |
| --- | --- | --- |
| x0 | `number` | The x-axis coordinate of the start circle. |
| y0 | `number` | The y-axis coordinate of the start circle. |
| r0 | `number` | The radius of the start circle. Must be non-negative and finite. |
| x1 | `number` | The x-axis coordinate of the end circle. |
| y1 | `number` | The y-axis coordinate of the end circle. |
| r1 | `number` | The radius of the end circle. Must be non-negative and finite. |
