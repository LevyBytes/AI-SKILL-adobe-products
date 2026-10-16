# getItem(key)

After decrypting data from secure storage, retrieves the value for the supplied key.

**Returns**: `Promise<Uint8Array>` Promise resolving to a `Uint8Array`  
**Throws**:

- `TypeError` Thrown when `key` is not an accepted type.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key whose value should be retrieved |
