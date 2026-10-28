# basename(path, [ext])

Provides the final path component, equivalent in purpose to Unix `basename`.
This is commonly used when a fully qualified path needs its file name separated out.

**Returns**: `string` - final component of the path  
**Throws**:

- `Error` if `path` is not a string, or when `ext` is supplied but is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | the path to evaluate |
| [ext] | `string` | an extension to remove from the result |
