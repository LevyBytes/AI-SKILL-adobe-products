# enqueue(chunk)

Places the supplied chunk chunk onto the readable side of the controlled transform stream.

**Throws**:

- `TypeError` is thrown when the stream is not readable.

| Param | Type | Description |
| --- | --- | --- |
| chunk | `_` | Data item added to the queue; each chunk represents one piece of data. |
