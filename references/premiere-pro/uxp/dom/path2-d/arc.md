# arc(x, y, radius, startAngle, endAngle, counterclockwise)

Places a circular arc within the active path segment.

**See**: [CanvasRenderingContext2D - arc](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc) for more details

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | `number` |  | Horizontal coordinate for the arc center. |
| y | `number` |  | Vertical coordinate for the arc center. |
| radius | `number` |  | Radius for the arc. Value must be positive. |
| startAngle | `number` |  | Start angle for the arc, in radians, measured from the positive x-axis. |
| endAngle | `number` |  | End angle for the arc, in radians, measured from the positive x-axis. |
| counterclockwise | `boolean` | `false` | Optional boolean. When true, the arc is drawn counter-clockwise from startAngle to endAngle. With the default `false`, drawing is clockwise. |
