# relative(from, to)

Computes the relative path from \{from} to \{to} using the current working directory.
When two absolute paths are available, this derives the route from the first path to the second; it is the inverse operation of path.resolve.

**Returns**: `string` - relative path string  
**Throws**:

- `Error` when `from` or `to` is not supplied as a string

| Param | Type | Description |
| --- | --- | --- |
| from | `string` | starting base path |
| to | `string` | target path to reach |
