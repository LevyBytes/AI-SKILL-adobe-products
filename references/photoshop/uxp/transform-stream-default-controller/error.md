# error(reason)

Moves both sides of the controlled transform stream into an error state, covering the readable side and the writable side, so later operations fail with the supplied error.
Queued chunks that have not yet been transformed are discarded.

| Param | Type |
| --- | --- |
| reason | `string` |
