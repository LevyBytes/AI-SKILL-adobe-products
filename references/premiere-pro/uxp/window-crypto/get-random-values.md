# getRandomValues(array)

Creates cryptographically strong random values.

**Returns**: The input array supplied as 'array', with its contents overwritten by newly generated random numbers.  
**Throws**:

- `TypedError` If 'array' is not a TypedArray or is either Float32Array or Float64Array
- `DOMException` If 'array' is longer than 65,536 bytes

| Param | Type | Description |
| --- | --- | --- |
| array | `IntegerArray` | An integer-based TypedArray: one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, or BigUint64Array, excluding Float32Array and Float64Array |
