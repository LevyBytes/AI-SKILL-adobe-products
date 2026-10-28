# CountQueuingStrategy(init)

Constructs a CountQueuingStrategy object using the supplied high water mark.

**Returns**: `CountQueuingStrategy`

| Param | Type | Description |
| --- | --- | --- |
| init | `Object` | Object containing the high water mark property. |
| init.highWaterMark | `number` | Total chunk count allowed in the internal queue before backpressure begins. |
