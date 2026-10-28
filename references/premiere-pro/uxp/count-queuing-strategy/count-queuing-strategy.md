# CountQueuingStrategy(init)

Constructs a `CountQueuingStrategy` using the supplied high water mark.

**Returns**: `CountQueuingStrategy`

| Param | Type | Description |
| --- | --- | --- |
| init | `Object` | Object with high water mark property. |
| init.highWaterMark | `number` | The total number of chunks that can be contained in the internal queue before backpressure is applied. |
