# basename(path, [ext])

Gets the final segment of a path, comparable to the Unix basename command.
This is commonly used to pull a file name out of a complete path value.

**Returns**: `string` - the last portion of a path  
**Throws**:

- `Error` if `path` is not a string or if `ext` is given and is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to evaluate |
| [ext] | `string` | extension text to remove from the result |
