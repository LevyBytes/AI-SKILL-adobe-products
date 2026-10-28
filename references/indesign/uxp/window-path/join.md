# join(paths)

Combines every supplied argument, then normalizes the path that results.

**Returns**: `string` - joined path string  
**Throws**:

- `Error` when a supplied path segment is not a string

| Param | Type | Description |
| --- | --- | --- |
| paths | `Array<(string\|Entry)>` | path values to combine |
