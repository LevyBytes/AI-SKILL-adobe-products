# resolve(paths)

The right-most parameter serves as \{to}; the remaining parameters are treated as the \{from} array.

Resolution begins with the leftmost \{from} value and produces an absolute path for \{to}.

When \{to} is not absolute already, \{from} values are prepended from right to left until an absolute path appears. If all \{from} paths are consumed without finding one, the current working directory is also included. The final path is normalized, and trailing slashes are stripped except when resolution lands at the filesystem root.

**Returns**: `string` - resolved string path  
**Throws**:

- `Error` if any of the arguments is not a string

| Param | Type | Description |
| --- | --- | --- |
| paths | `Array<(string\|Entry)>` | path values or segments to resolve |
