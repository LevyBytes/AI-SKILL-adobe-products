# appendArrayItem(schemaNS, arrayName, itemValue, [itemOptions], [arrayOptions])

Adds an item to an array that already exists. If no property with that array name is present, it creates a new array-type property first.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI value; reference <../../../../modules/uxp/xmp/xmp-classes/xmp-const.md#schema-namespace-string-constants> for values. |
| arrayName | `string` |  | String name for the array-type property; a general path expression is allowed. |
| itemValue | `string` |  | String value for the item being added. Use null when an array item carries no value. |
| [itemOptions] | `number` | `0` | Flag applied to the item when the call creates it. One of: - 0: simple item, or the type inferred from arrayOptions. - XMPConst.`PROP_IS_ARRAY`: array item, using alt, bag, or seq form. - XMPConst.`PROP_IS_STRUCT`: structured item with child fields. |
| [arrayOptions] | `number` | `0` | Flag describing the array shape. Provide it when the array is created; when the array exists already, the value is ignored. One of: - XMPConst.`ARRAY_IS_ORDERED`: item sequence matters. Implies XMPConst.`PROP_IS_Array` - XMPConst.`ARRAY_IS_ALTERNATIVE`: alternate choices exclude one another. Also sets XMPConst.`PROP_IS_ARRAY` plus XMPConst.`ARRAY_IS_ORDERED` for alternate arrays.\<br\>\</br\> |

**Example**

Documented signature (call contract, not a function implementation):

`XMPMetaObj.appendArrayItem(schemaNS, arrayName, itemValue[, itemOptions, arrayOptions])`
