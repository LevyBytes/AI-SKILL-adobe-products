# require('uxp').xmp.XMPUtils — composeQualifierPath(schemaNS, propName, qualNS, qualName)

Creates a path-expression string for a qualifier attached to a property by using the namespace's registered prefix, in the form:
schemaNS:propName/?qualNS:qualName

**Returns**: `string` - path-expression string for a qualifier attached to a property.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI string; see [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| propName | `string` | Property name string. A general path expression is allowed. |
| qualNS | `string` | Qualifier namespace URI string. |
| qualName | `string` | Qualifier name. A simple XML name is required. |

**Example**

```js
XMPUtils.composeQualifierPath(schemaNS, propName, qualNS, qualName);
```
