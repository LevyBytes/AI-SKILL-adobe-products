# insertArrayItem(schemaNS, arrayName, itemIndex, itemValue, [itemOptions])

Places a new item before an existing item in an array. Items after that point move up by one index position. The array has to exist before this call.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| arrayName | `string` |  | String name for the array-type property; a general path expression is allowed. |
| itemIndex | `number` |  | 1-based position where the new item is inserted. XMPConst.`ARRAY_LAST_ITEM` targets the final item currently in the array. |
| itemValue | `string` |  | Value for the new item. Use null for array entries without values. |
| [itemOptions] | `number` | `0` | Flag applied to the item when the call creates it. One of: - 0: simple item, the default. - XMPConst.`PROP_IS_ARRAY`: array item, using alt, bag, or seq form. - XMPConst.`PROP_IS_STRUCT`: structured item with child fields. |

**Example**

Documented signature (call contract, not a function implementation):

`XMPMetaObj.insertArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])`
