# XMPMeta.getArrayItem()

XMPMetaObj.getArrayItem(schemaNS, arrayName, itemIndex)

### Description

Gets one array entry from metadata.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| arrayName | String | Array name string; general path expressions are allowed. |
| itemIndex | Number | 1-based item position. Use XMPConst.`ARRAY_LAST_ITEM` for the final item already in the array. |

### Returns

An XMPProperty object, or undefined when the property is absent.
