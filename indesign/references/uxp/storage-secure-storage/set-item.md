# setItem(key, value)

After encrypting the value, secure storage records it together with the key.

**Returns**: `Promise<void>` Promise resolving after the value has been saved; it rejects when the value is empty or storage does not complete.  
**Throws**:

- `TypeError` Thrown when either `key` or `value` is not one of the accepted types.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key used to store the value |
| value | `string` \| `ArrayBuffer` \| `TypedArray` | Value associated with the key. |
