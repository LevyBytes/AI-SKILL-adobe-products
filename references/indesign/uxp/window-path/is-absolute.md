# isAbsolute(path)

Checks whether \{path} is absolute. An absolute path resolves to one fixed location no matter what working directory is active.

When the supplied \{path} is a zero-length string, the result is `false`.

**Returns**: `boolean` - whether the path is absolute  
**Throws**:

- `Error` when `path` is not supplied as a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to check |
