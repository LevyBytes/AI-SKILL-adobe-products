# normalize(path)

Produces a normalized path string by collapsing '..' and '.' segments.
Runs of several slashes become one slash; a final slash remains when present. Windows output uses backslashes.

**Returns**: `string` - normalized path string  
**Throws**:

- `Error` when `path` is not supplied as a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to normalize |
