# addColorStop(offset, colorValue)

On a canvas gradient, inserts a color stop using the supplied `offset` and `color value`.

**Throws**:

- `DOMException`

**See**: [CanvasGradient - addColorStop](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient/addColorStop) for API details

| Param | Type | Description |
| --- | --- | --- |
| offset | `number` | A `number` from 0 through 1 inclusive that places the color stop. 0 maps to the gradient start; 1 maps to the gradient end. |
| colorValue | `string` | CSS `<color>` string used for the stop's color. |
