# removeItem(key)

Deletes the value tied to the supplied key.

**Returns**: `Promise<void>` Promise resolves after the key's value is removed, and rejects when the value cannot be removed or is not found.  
**Throws**:

- `TypeError` If a key is not an accepted type.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key whose value should be removed |
