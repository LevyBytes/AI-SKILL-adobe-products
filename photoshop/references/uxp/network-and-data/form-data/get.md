# window.FormData — get(name)

Retrieves the first value tied to a specified key inside a FormData object.
Use getAll() when multiple values may exist and you need the complete set.

**Returns**: `string` \| `Blob` - Value for the matching specified name, or null if no key matches.  
**See**: [FormData - get](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get)  
**Since**: v7.3.0

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Key name to retrieve |
