# resolve(paths)

The right-most parameter is treated as \{to}; every earlier parameter belongs to the \{from} array.

Resolution begins at the leftmost \{from} parameter and turns \{to} into an absolute path.

When \{to} is not absolute, \{from} values are prepended from right to left until an absolute path appears.
If none of the \{from} paths produces an absolute path, the current working directory also participates.
The final path is normalized, and trailing slashes are dropped except when the resolved result is the root directory.

**Returns**: `string` - resolved path string  
**Throws**:

- `Error` if any argument is not a string

| Param | Type | Description |
| --- | --- | --- |
| paths | `Array<(string\|Entry)>` | sequence of path values or path segments |
