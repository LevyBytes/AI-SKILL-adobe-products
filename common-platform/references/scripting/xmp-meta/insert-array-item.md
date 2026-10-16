# XMPMeta.insertArrayItem()

XMPMetaObj.insertArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])

### Description

Inserts an item into an array before an existing item. All later item indexes are increased. The array must already exist.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS |  | Namespace URI value. See Schema namespace string constants. |
| arrayName | String | Array-type property name; a general path expression is accepted. |
| itemIndex | Number | 1-based position where the new item is inserted. Use XMPConst.`ARRAY_LAST_ITEM` for the final item already in the array. |
| itemValue | String | New item value. Use null for array items without values. |
| itemOptions | Number | Optional. Flag for the new item when one is created. One of: - 0: Default simple item. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as a nested-field structure. |

### Returns

Nothing
