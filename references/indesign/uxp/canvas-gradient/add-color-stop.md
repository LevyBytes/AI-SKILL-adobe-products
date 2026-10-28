# addColorStop(offset, colorValue)

For a specified canvas gradient, add a color stop using the provided `offset` and `color value`.

**Throws**:

- `DOMException`

**See**: [CanvasGradient - addColorStop](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient/addColorStop) for more details

| Param | Type | Description |
| --- | --- | --- |
| offset | `number` | Use a value from 0 through 1, inclusive, for the color stop's position; 0 maps to the gradient start, and 1 maps to the end. |
| colorValue | `string` | Provide a CSS `<color>` value for the stop's color. |
