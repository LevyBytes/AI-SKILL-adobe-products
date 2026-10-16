# XMPMeta.deleteArrayItem()

XMPMetaObj.deleteArrayItem(schemaNS, arrayName, itemIndex)

### Description

Deletes the metadata tree rooted at the specified array item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| arrayName | String | Array-type property name string; general path expressions are allowed. |
| itemIndex | Number | 1-based item position. Use XMPConst.`ARRAY_LAST_ITEM` for the final item already in the array. |

### Returns

Nothing
