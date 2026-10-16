# setItem(key, value)

Stores a key/value pair in secure storage after encrypting the value.

**Returns**: `Promise<void>` Promise resolves once storage succeeds, and rejects when the value is empty or cannot be stored.  
**Throws**:

- `TypeError` If either key or value is not one of the accepted types.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key whose value is being set |
| value | `string` \| `ArrayBuffer` \| `TypedArray` | Data assigned to the key. |
