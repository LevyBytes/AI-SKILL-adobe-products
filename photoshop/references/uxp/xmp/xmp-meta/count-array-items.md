# countArrayItems(schemaNS, arrayName)

Gives back the item count for an array-type metadata property.

**Returns**: `number` - count of items

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| arrayName | `string` | String name for the array-type property; a general path expression is allowed. |

**Example**

```js
XMPMetaObj.countArrayItems(schemaNS, arrayName);
```
