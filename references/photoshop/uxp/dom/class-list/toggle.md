# window.ClassList - toggle(token, force)

Flips membership of `token` in the list. When `force` is omitted, these
rules apply:

- a present token is removed, and `false` is returned
- a missing token is added, and `true` is returned

When `force` is provided:

- `true` adds the token
- `false` removes the token

**Returns**: `boolean` - whether `token` is still present once the operation completes  
**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-toggle](https://dom.spec.whatwg.org/#dom-domtokenlist-toggle)

| Param | Type |
| --- | --- |
| token | `string` |
| force | `boolean` |
