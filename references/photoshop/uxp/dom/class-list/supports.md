# window.ClassList - supports(token)

Checks whether the list accepts `token`; accepted tokens yield `true`, and
rejected ones yield `false`. When `false` comes back, using that token with
any other method would throw an error.

**Returns**: `boolean` - when `true`, `token` is acceptable for ClassList calls  
**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-supports](https://dom.spec.whatwg.org/#dom-domtokenlist-supports)

| Param | Type |
| --- | --- |
| token | `string` |
