# enqueue(chunk)

Places `chunk` into the transform stream's readable-side queue.

**Throws**:

- `TypeError` thrown if the stream is not readable.

| Param | Type | Description |
| --- | --- | --- |
| chunk | `_` | Data placed into the queue; each chunk represents one unit of data. |
