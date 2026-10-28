# getLocalizedText(schemaNS, altTextName, genericLang, specificLang)

Gets the text for one language from an alternate-text array. It attempts the specific language first; if that misses, it tries the generic language when one is provided. If neither language match is found, it uses the x-default item when available, otherwise the first item.

**Returns**: `string` \| `undefined` - text selected for the requested language from an alternate-text array.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| altTextName | `string` | String name for the alternate-text array; a general path expression is allowed. |
| genericLang | `string` | Generic language name as an RFC 3066 primary subtag. null or an empty string is allowed. |
| specificLang | `string` | Specific language name as an RFC 3066 primary subtag; for example, en-US. This parameter is required. |

**Example**

```js
XMPMetaObj.getLocalizedText(schemaNS, altTextName, genericLang, specificLang);
```
