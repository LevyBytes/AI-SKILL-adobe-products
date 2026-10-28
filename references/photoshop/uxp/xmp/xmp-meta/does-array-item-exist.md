# doesArrayItemExist(schemaNS, arrayName, itemIndex)

Checks whether the metadata contains an existing array with an item at the requested index.

**Returns**: `boolean` - true when both the array and item are present.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| arrayName | `string` | String name for the array; a general path expression is allowed. |
| itemIndex | `number` | 1-based item position. |

**Example**

```js
XMPMetaObj.doesArrayItemExist(schemaNS, arrayName, itemIndex);
```
