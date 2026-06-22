# Crypto, Data Storage

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: window.crypto; Data Storage; window.localStorage; window.sessionStorage.

## window.crypto

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Crypto)
- [https://w3c.github.io/webcrypto/#Crypto-method-getRandomValues](https://w3c.github.io/webcrypto/#Crypto-method-getRandomValues)
- [https://w3c.github.io/webcrypto/#Crypto-method-randomUUID](https://w3c.github.io/webcrypto/#Crypto-method-randomUUID)

**Since**: UXP v6.2

### getRandomValues(array)

Creates random data suitable for cryptographic use.

**Returns**: The 'array' object itself, with each entry overwritten using newly produced random values
**Throws**:

- `TypedError` If the input 'array' is not a TypedArray or either Float32Array or Float64Array
- `DOMException` If the input 'array' length exceeds 65,536 bytes

| Param | Type | Description |
| --- | --- | --- |
| array | `IntegerArray` | An integer-based TypedArray, that is one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, BigUint64Array but not Float32Array nor Float64Array |

### randomUUID()

Creates a fresh version 4 UUID.

**Returns**: `string` - A 36 character long v4 UUID string generated at random

## Data Storage

- [LocalStorage](uxp-global-members.md)
- [SessionStorage](uxp-global-members.md)

## window.localStorage

Use this local key-value store for preferences and similar plugin data.
Although the data can persist, several clearing paths can remove it, so `localStorage` should hold only information your plugin can rebuild elsewhere.

Keep passwords and other sensitive data out of `localStorage`; use [storage.secureStorage](uxp.md) for that class of storage.

### length : `number`

**Read only**
Count of entries currently held in local storage.

### key(index)

Gives back the nth key name from local storage.

**Returns**: `string` - The key name; when no entry exists for that index, the result is null.

| Param | Type | Description |
| --- | --- | --- |
| index | `number` | Integer representing the number of the key |

### getItem(key)

Reads the local-storage value assigned to key.
When the key is absent, the result is null.

**Returns**: `string` - String value associated with the key. When the key is absent, the result is null.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to retrieve the value of. |

### setItem(key, value)

Stores key and value in local storage.
If key is already present, its value is overwritten.

**Throws**:

- `Error` If it fails to store

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to set value |
| value | `string` | Value for the key |

### removeItem(key)

Deletes the stored key/value pair when that key is present in local storage.
If the supplied key has no matching item, the call has no effect.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key to remove |

### clear()

Deletes every key/value pair from local storage.

## window.sessionStorage

`window.sessionStorage` exposes SessionStorage.
It is a local key/value store for data that should last only through the plugin's active session.
For details about the API behavior, see the [localStorage](uxp-global-members.md) API.
