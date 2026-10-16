# parse(path)

Builds an object from a path string; this is the inverse operation for format().

**Returns**: `Object` - \{ dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` }  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to evaluate |
