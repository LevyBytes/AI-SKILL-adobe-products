# error(reason)

Marks both the readable side and writable side of the controlled transform stream as errored, causing later interactions to fail with the supplied error.
Chunks waiting for transformation are discarded.

| Param | Type |
| --- | --- |
| reason | `string` |
