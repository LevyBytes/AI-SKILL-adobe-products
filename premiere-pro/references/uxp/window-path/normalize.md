# normalize(path)

Normalizes a string path and collapses '..' and '.' segments.
Repeated slashes become a single slash; an existing trailing slash remains. Windows output uses backslashes.

**Returns**: `string` - normalized path string  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to normalize |
