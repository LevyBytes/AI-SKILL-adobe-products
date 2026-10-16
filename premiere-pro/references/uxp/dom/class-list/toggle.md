# window.ClassList — toggle(token, force)

Changes membership for `token` in the list. When `force` is omitted, these outcomes apply:

- an existing token is removed, and `false` is returned
- an absent token is inserted, and `true` is returned

When `force` is provided, behavior is:

- `true` adds the token
- `false` removes the token

**Returns**: `boolean` - whether the token exists in the list once the call finishes  
**Throws**:

- `DOMException`

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-toggle](https://dom.spec.whatwg.org/#dom-domtokenlist-toggle)

| Param | Type |
| --- | --- |
| token | `string` |
| force | `boolean` |
