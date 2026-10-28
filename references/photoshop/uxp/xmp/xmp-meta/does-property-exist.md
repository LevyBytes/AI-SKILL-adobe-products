# doesPropertyExist(schemaNS, propName)

Checks whether the metadata currently contains a property with the requested name.

**Returns**: `boolean` - true when the property is present.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| propName | `string` | String name for the property; a general path expression is allowed. |

**Example**

```js
XMPMetaObj.doesPropertyExist(schemaNS, propName);
```
