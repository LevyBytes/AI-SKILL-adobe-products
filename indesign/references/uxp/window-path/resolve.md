# resolve(paths)

The parameter on the far right is treated as \{to}; the remaining parameters form the \{from} array.

Resolution starts with the leftmost \{from} value and resolves \{to} into an absolute path.

When \{to} is not already absolute, \{from} values are added from right to left until an absolute path appears. If all \{from} entries are used and none yields an absolute path, the current working directory also participates. The final path is normalized, and terminal slashes are stripped except when the result is the root directory.

**Returns**: `string` - resolved path string  
**Throws**:

- `Error` when any argument is not a string

| Param | Type | Description |
| --- | --- | --- |
| paths | `Array<(string\|Entry)>` | ordered path values or segments |
