# getRandomValues(array)

Creates cryptographically strong random values.

**Returns**: The input 'array' itself, with its current contents overwritten by the newly generated random numbers  
**Throws**:

- `TypedError` If 'array' is not a TypedArray, or if it is either Float32Array or Float64Array
- `DOMException` If 'array' is longer than 65,536 bytes

| Param | Type | Description |
| --- | --- | --- |
| array | `IntegerArray` | Integer-based TypedArray value: one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, or BigUint64Array; Float32Array and Float64Array are excluded. |
