# addColorStop(offset, colorValue)

Adds a color stop to a canvas gradient using the supplied `offset` and `color value`.

**Throws**:

- `DOMException`

**See**: [CanvasGradient - addColorStop](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient/addColorStop) for additional details

| Param | Type | Description |
| --- | --- | --- |
| offset | `number` | A value from 0 through 1, inclusive, that marks where the color stop sits. 0 marks the gradient start; 1 marks its end. |
| colorValue | `string` | A CSS `<color>` value for the stop's color. |
