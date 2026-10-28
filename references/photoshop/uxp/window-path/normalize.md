# normalize(path)

Produces a normalized string path by collapsing `..` and `.` segments.
Runs of slashes are collapsed to one slash. A final slash stays intact, and Windows output uses backslashes.

**Returns**: `string` - normalized string path  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | value whose path text should be normalized |
