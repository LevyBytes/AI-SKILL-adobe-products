# isAbsolute(path)

Checks whether \{path} is absolute. An absolute path resolves to one fixed location no matter which working directory is active.

When \{path} is an empty string, the result is `false`.

**Returns**: `boolean` - whether the path is absolute  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to test |
