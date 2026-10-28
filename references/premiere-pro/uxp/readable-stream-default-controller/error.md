# error(error)

Moves the controlled readable stream into an errored state.
After this call, every later interaction fails with `error`.

**Throws**:

- `TypeError` if the source object is not a `ReadableStreamDefaultController`

| Param | Type |
| --- | --- |
| error | `_` |
