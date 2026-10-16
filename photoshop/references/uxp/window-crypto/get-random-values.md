# getRandomValues(array)

Creates random data suitable for cryptographic use.

**Returns**: The 'array' object itself, with each entry overwritten using newly produced random values
**Throws**:

- `TypedError` If the input 'array' is not a TypedArray or either Float32Array or Float64Array
- `DOMException` If the input 'array' length exceeds 65,536 bytes

| Param | Type | Description |
| --- | --- | --- |
| array | `IntegerArray` | An integer-based TypedArray, that is one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, BigUint64Array but not Float32Array nor Float64Array |
