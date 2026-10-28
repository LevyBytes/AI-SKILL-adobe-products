# basename(path, [ext])

Gets the final component of a path, comparable to Unix basename.
This is commonly used to pull a file name out of a fully qualified path.

**Returns**: `string` - final component of the path  
**Throws**:

- `Error` when `path` is not a string, or when supplied `ext` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to inspect |
| [ext] | `string` | extension value to strip from the result |
