# doesQualifierExist(schemaNS, structName, qualNS, qualName)

Checks whether the requested qualifier is present for the specified property.

**Returns**: `boolean` - true when both the property and qualifier are present.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| structName | `string` | String name for the structure; a general path expression is allowed. |
| qualNS | `string` | URI string for the qualifier namespace. |
| qualName | `string` | Qualifier name string; a simple XML name is required. |

**Example**

```js
XMPMetaObj.doesQualifierExist(schemaNS, structName, qualNS, qualName);
```
