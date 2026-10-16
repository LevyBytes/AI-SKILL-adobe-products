# relative(from, to)

Computes the relative path from \{from} to \{to} using the current working directory.
When two absolute paths are involved, this derives how to navigate from one to the other; conceptually, it reverses path.resolve.

**Returns**: `string` - relative path string  
**Throws**:

- `Error` if either `from` or `to` is not a string

| Param | Type | Description |
| --- | --- | --- |
| from | `string` | base path for the calculation |
| to | `string` | target path for the relative result |
