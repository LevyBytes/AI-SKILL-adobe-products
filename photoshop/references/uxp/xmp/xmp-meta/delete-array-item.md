# deleteArrayItem(schemaNS, arrayName, itemIndex)

Removes the metadata subtree rooted at the specified array item.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| arrayName | `string` | String name for the array-type property; a general path expression is allowed. |
| itemIndex | `number` | 1-based item position. XMPConst.`ARRAY_LAST_ITEM` targets the final item currently in the array. |

**Example**

```js
XMPMetaObj.deleteArrayItem(schemaNS, arrayName, itemIndex);
```
