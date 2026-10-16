# parse(path)

Builds an object representation from a path string; it is the inverse of `format()`.

**Returns**: `Object` - \{ dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` }  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path to evaluate |
