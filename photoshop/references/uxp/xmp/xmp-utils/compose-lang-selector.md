# require('uxp').xmp.XMPUtils - composeLangSelector(schemaNS, arrayName, locale)

Builds a path expression that addresses a language-specific alternate item in an alt text array, using the namespace registered prefix, in the form:
schemaNS:arrayName[@xml:lang='langName']

**Returns**: `string` - path-expression string for selecting a language-specific alternate item in an alt text array.  
**Note**: Do not use this as a replacement for getLocalizedText() or setLocalizedText().
Those methods add language-selection behavior and keep the x-default value aligned.
This helper creates only an explicit-language path expression, and only for that language.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI string; see [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| arrayName | `string` | Array property name string. A general path expression is allowed. |
| locale | `string` | RFC3066 locale code string for the language to select. |

**Example**

```js
XMPUtils.composeLanguageSelector(schemaNS, arrayName, locale);
```
