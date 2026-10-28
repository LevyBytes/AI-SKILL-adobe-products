# close()

Shuts down the controlled readable stream.
Previously enqueued chunks remain available to consumers; after those chunks have been read, the stream enters the closed state.

**Throws**:

- `TypeError` if the source is not a `ReadableStreamDefaultController`
