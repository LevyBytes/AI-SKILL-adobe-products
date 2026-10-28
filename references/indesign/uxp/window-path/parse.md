# parse(path)

Builds an object from a path string.
Use format() for the reverse conversion.

Result details:

**Returns**: `Object` - \{ dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` }  
**Throws**:

- `Error` when `path` is not supplied as a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to inspect |
