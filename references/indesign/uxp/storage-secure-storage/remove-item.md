# removeItem(key)

Deletes the value tied to the supplied key.

**Returns**: `Promise<void>` Promise resolving after the value associated with the key is removed; it rejects if that value cannot be removed or is not found.  
**Throws**:

- `TypeError` Thrown when `key` is not an accepted type.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key whose value should be removed |
