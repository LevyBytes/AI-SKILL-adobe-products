# V2 unified approach

V2 routes layer edits through `/v2/create-composite`:

- **Unified route** - one endpoint handles layer manipulation work
- **Batch operations** - one request can contain several layer edits
- **Atomic transactions** - the request applies as a whole or fails as a whole
- **Expanded capabilities** - v2 covers layer types that v1 did not expose

Only part of v1's behavior is available in the current v2 API. Adobe is still moving some advanced v1 features over, so consult the layer-specific guides for support details.
