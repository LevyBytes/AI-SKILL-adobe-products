# require('uxp').xmp.XMPUtils - composeFieldSelector(schemaNS, arrayName, fieldNS, fieldName, fieldValue)

Builds a path-expression string that selects an alternate item by matching a field value, with registered namespace prefixes; format:
schemaNS:arrayName[fieldNS:fieldName='fieldValue']

**Returns**: `string` - path-expression string for selecting an alternate item by field value.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI string; see [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| arrayName | `string` | Array property name string. A general path expression is allowed. |
| fieldNS | `string` | Field namespace URI string. |
| fieldName | `string` | Field name. A simple XML name is required. |
| fieldValue | `string` | Field value to match. |

**Example**

```js
XMPUtils.composeFieldSelector(schemaNS, arrayName, fieldNS, fieldName, fieldValue);
```
