# Crypto, Data Storage

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: window.crypto; Data Storage; window.localStorage; window.sessionStorage.

## window.crypto

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Crypto)
- [https://w3c.github.io/webcrypto/#Crypto-method-getRandomValues](https://w3c.github.io/webcrypto/#Crypto-method-getRandomValues)
- [https://w3c.github.io/webcrypto/#Crypto-method-randomUUID](https://w3c.github.io/webcrypto/#Crypto-method-randomUUID)

**Since**: UXP v6.2

### getRandomValues(array)

Creates cryptographically strong random values.

**Returns**: The input array supplied as 'array', with its contents overwritten by newly generated random numbers.  
**Throws**:

- `TypedError` If 'array' is not a TypedArray or is either Float32Array or Float64Array
- `DOMException` If 'array' is longer than 65,536 bytes

| Param | Type | Description |
| --- | --- | --- |
| array | `IntegerArray` | An integer-based TypedArray: one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, or BigUint64Array, excluding Float32Array and Float64Array |

### randomUUID()

Creates a fresh version 4 UUID.

**Returns**: `string` - A randomly generated v4 UUID stored as a 36 character string.

## Data Storage

- [LocalStorage](uxp-global-members.md)
- [SessionStorage](uxp-global-members.md)

## window.localStorage

`window.localStorage` supplies a local key-value store for preferences and similar data.
Although the data usually persists, several actions can clear it, so keep only values that your plugin can rebuild elsewhere.

Avoid putting passwords or other secure data in `localStorage`; use [storage.secureStorage](uxp.md) instead.

### length : `number`

**Read only**
Count of items currently saved in local storage.

### key(index)

Gets the nth key name from local storage.

**Returns**: `string` - The key name; when the index is absent, the call returns null.

| Param | Type | Description |
| --- | --- | --- |
| index | `number` | Integer identifying which key position to read |

### getItem(key)

Reads the value associated with key from local storage.
When no such key exists, the result is null.

**Returns**: `string` - String value mapped to key; returns null when key is missing.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key whose stored value should be read. |

### setItem(key, value)

Stores key with value in local storage.
If key is already present, its value is replaced.

**Throws**:

- `Error` If storage fails

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key whose value should be set |
| value | `string` | Value to associate with key |

### removeItem(key)

Deletes an existing key/value pair from local storage.
If no item is associated with the supplied key, the call has no effect.

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | Key that should be removed |

### clear()

Deletes every key/value pair from local storage.

## window.sessionStorage

SessionStorage is exposed as `window.sessionStorage`.
It supplies a local key/value store for data that should last only through the plugin's current session.
For details about the API itself, see the [localStorage](uxp-global-members.md) API.
