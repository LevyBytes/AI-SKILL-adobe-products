# isAbsolute(path)

Checks whether \{path} is absolute. Because an absolute path is location-stable, it resolves to the same place regardless of the current working directory.

For a zero-length \{path} string, the return value is `false`.

**Returns**: `boolean` - if the path is an absolute path or not  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to test |
