# XMPMeta.setArrayItem()

XMPMetaObj.setArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])

### Description

Replaces an array item, or appends one. The array must already exist. For new items, prefer appendArrayItem() or insertArrayItem().

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| arrayName | String | Array-type property name; a general path expression is accepted. |
| itemIndex | Number | 1-based position used for the new item. Use XMPConst.`ARRAY_LAST_ITEM` to replace the final item already in the array.<br><br>itemValue<br><br>String<br><br>New item value string. Use null for array items without values.<br><br>itemOptions<br><br>Flag for the new item when one is created. One of: - 0: Default simple item. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as a nested-field structure.<br><br>Optional |

### Returns

Nothing
