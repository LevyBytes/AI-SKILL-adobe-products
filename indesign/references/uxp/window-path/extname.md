# extname(path)

Gets the path extension, beginning at the final '.' through the string end within the path's last component.
If the last component contains no '.', or begins with '.', the method yields an empty string.

**Returns**: `string` - path extension  
**Throws**:

- `Error` when `path` is not supplied as a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to inspect |
