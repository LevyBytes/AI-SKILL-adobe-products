# deleteStructField(schemaNS, structName, fieldNS, fieldName)

Deletes the metadata subtree whose root is the selected structure field.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| structName | `string` | String name for the structure; a general path expression is allowed. |
| fieldNS | `string` | Field-type namespace string; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| fieldName | `string` | Field name string; a simple XML name is required. |

**Example**

```js
XMPMetaObj.deleteStructField(schemaNS, structName, fieldNS, fieldName);
```
