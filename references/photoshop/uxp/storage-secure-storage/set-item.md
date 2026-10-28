# setItem(key, value)

Encrypts `value`, then saves it with `key` in secure storage.

**Returns**: `Promise<void>` resolves after the value has been stored; rejects if the value is empty or cannot be stored.  
**Throws**:

- `TypeError` when either key or value is not one of the accepted types.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to set value |
| value | `string` \| `ArrayBuffer` \| `TypedArray` | Value for a key. |
