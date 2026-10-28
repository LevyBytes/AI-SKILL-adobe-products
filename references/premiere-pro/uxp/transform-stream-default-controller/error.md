# error(reason)

Signals an error on both the readable and writable sides of the controlled transform stream.
All subsequent interactions fail with `reason`, and any chunks waiting for transformation are discarded.

| Param | Type |
| --- | --- |
| reason | `string` |
