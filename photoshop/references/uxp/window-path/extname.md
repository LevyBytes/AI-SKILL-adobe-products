# extname(path)

Gets the path extension, beginning at the last `.` and continuing through the end of the string in the path's final segment.
When the final segment has no `.` or starts with `.`, the result is a zero-length string.

**Returns**: `string` - the extension of the path  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to evaluate |
