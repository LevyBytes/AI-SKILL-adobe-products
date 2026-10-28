# close()

Shuts the controlled readable stream.
Already-enqueued chunks remain available to consumers; after those chunks are exhausted, the stream enters the closed state.

**Throws**:

- `TypeError` is thrown when the source is not a ReadableStreamDefaultController
