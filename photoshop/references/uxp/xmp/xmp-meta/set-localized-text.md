# setLocalizedText(schemaNS, altTextName, genericLang, specificLang, itemValueThe)

This call writes the alternate-text value for one language choice and includes the special handling required for the x-default entry.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI text. See [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| altTextName | `string` | Name text for the alternate-text array. A general path expression is allowed. |
| genericLang | `string` | Generic language name as an RFC 3066 primary subtag. null and the empty string are allowed. |
| specificLang | `string` | Specific language name as an RFC 3066 primary subtag; for example, en-US. This argument is required. |
| itemValueThe | `string` | Replacement text value. |

**Example**

```js
XMPMetaObj.setLocalizedText(
  schemaNS,
  altTextName,
  genericLang,
  specificLang,
  itemValue,
  setOptions,
);
```
