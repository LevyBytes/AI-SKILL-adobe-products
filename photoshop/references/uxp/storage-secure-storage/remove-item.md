# removeItem(key)

Deletes the value tied to the supplied key.

**Returns**: `Promise<void>` resolves once the value associated with the key has been removed; rejects when no matching value is found or removal does not happen.  
**Throws**:

- `TypeError` when a key is not an accepted type.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to remove value |
