# CountQueuingStrategy(init)

Creates a CountQueuingStrategy object using the specified high water mark.

**Returns**: `CountQueuingStrategy`

| Param | Type | Description |
| --- | --- | --- |
| init | `Object` | Object containing the high water mark property. |
| init.highWaterMark | `number` | Maximum chunks allowed in the internal queue before backpressure starts. |
