# XMPMeta.appendArrayItem()

XMPMetaObj.appendArrayItem(schemaNS, arrayName[, itemOptions], itemValue[, arrayOptions])

### Description

Appends an item to an existing array, or creates a new array-type property when the named array is missing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants. | Namespace URI value. |
| arrayName | String | Array-type property name string; general path expressions are allowed. |
| itemOptions | Number | Optional. Flag for the new item when one is being made. One of: - 0: Default value; a simple item, or the type implied by arrayOptions. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as a nested-field structure. |
| itemValue | String | New item value string. Use null for array items without values. |
| arrayOptions | Number | Optional. Flag for the array form. Required when the array is created; ignored after the array exists. One of: - XMPConst.`ARRAY_IS_ORDERED` - Item order matters; also implies XMPConst.`PROP_IS_ARRAY`. - XMPConst.`ARRAY_IS_ALTERNATIVE` - Items are exclusive alternatives; also implies XMPConst.`PROP_IS_ARRAY` and XMPConst.`ARRAY_IS_ORDERED`. |

### Returns

Nothing
