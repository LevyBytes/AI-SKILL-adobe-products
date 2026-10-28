# close()

Closes the readable stream managed by this controller.
Chunks that were already enqueued remain available to consumers.
After those chunks have been read, the stream moves to the closed state.

**Throws**:

- `TypeError` thrown if the source is not a ReadableStreamDefaultController
