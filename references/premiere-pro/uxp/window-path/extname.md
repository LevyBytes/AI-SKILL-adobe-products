# extname(path)

Computes the extension for `path`, starting at the last '.' in the final path component and continuing to the string end.
When that final component lacks '.' or starts with '.', the function returns an empty string.

**Returns**: `string` - extension text for the path  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | the path to evaluate |
