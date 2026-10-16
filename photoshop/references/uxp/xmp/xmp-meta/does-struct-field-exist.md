# doesStructFieldExist(schemaNS, structName, fieldNS, fieldName)

Checks whether the metadata currently includes the named field inside the specified structure.

**Returns**: `boolean` - true when both the structure and field are present.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| structName | `string` | String name for the structure; a general path expression is allowed. |
| fieldNS | `string` | Field-type namespace string; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| fieldName | `string` | Field name string; a simple XML name is required. |

**Example**

```js
XMPMetaObj.doesStructFieldExist(schemaNS, structName, fieldNS, fieldName);
```
