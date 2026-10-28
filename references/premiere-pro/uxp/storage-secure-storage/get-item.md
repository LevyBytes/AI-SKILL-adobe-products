# getItem(key)

Gets the value for a supplied key after decrypting it from secure storage.

**Returns**: `Promise<Uint8Array>` Promise resolves with a Uint8Array  
**Throws**:

- `TypeError` If a key is not an accepted type.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key used to retrieve the value |
