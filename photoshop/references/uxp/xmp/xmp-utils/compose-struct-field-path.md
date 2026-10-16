# require('uxp').xmp.XMPUtils — composeStructFieldPath(schemaNS, structName, fieldNS, fieldName)

Creates a path-expression string for a field inside a structure by using the registered namespace prefixes, in the form:
schemaNS:structName/fieldNS:fieldName

**Returns**: `string` - path-expression string for a structure field.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI string; see [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| structName | `string` | Structure property name string. A general path expression is allowed. |
| fieldNS | `string` | Field namespace URI string. |
| fieldName | `string` | Field name. A simple XML name is required. |

**Example**

```js
XMPUtils.composeStructFieldPath(schemaNS, structName, fieldNS, fieldName);
```
