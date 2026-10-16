# relative(from, to)

Computes the relative path from \{from} to \{to} using the current working directory.
When two absolute paths are available, this derives how to reach the second from the first. It is the inverse operation for path.resolve.

**Returns**: `string` - relative string path  
**Throws**:

- `Error` if either `from` or `to` is not a string

| Param | Type | Description |
| --- | --- | --- |
| from | `string` | starting path for the calculation |
| to | `string` | destination path for the calculation |
