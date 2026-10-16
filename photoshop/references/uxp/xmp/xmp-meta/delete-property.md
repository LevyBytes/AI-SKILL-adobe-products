# deleteProperty(schemaNS, propName)

Removes the metadata subtree rooted at the specified property. Missing properties are ignored.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| propName | `string` | String name for the property; a general path expression is allowed. |

**Example**

```js
XMPMetaObj.deleteProperty(schemaNS, propName);
```
