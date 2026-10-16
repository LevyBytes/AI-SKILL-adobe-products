# getStructField(schemaNS, structName, fieldNS, fieldName)

Gets the value of a field located inside a nested metadata structure.
The result is [XMPProperty](../../xmp-property-xmp-property/reference-index.md).

**Returns**: `XMPProperty` \| `undefined` - value from the nested structure field.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| structName | `string` | String name for the structure; a general path expression is allowed. |
| fieldNS | `string` | Field-type namespace string; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| fieldName | `string` | Field name string; a simple XML name is required. |

**Example**

```js
XMPMetaObj.getStructField(schemaNS, structName, fieldNS, fieldName);
```
