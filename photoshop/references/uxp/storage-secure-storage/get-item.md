# getItem(key)

Looks up the supplied key and returns the associated value after decrypting it from secure storage.

**Returns**: `Promise<Uint8Array>` resolves with a `Uint8Array`  
**Throws**:

- `TypeError` when a key is not an accepted type.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to get value |
