# setArrayItem(schemaNS, arrayName, itemIndex, itemValue, [itemOptions])

Use this method to overwrite an array entry or add one at the end. The array has to be present already. For new entries, appendArrayItem() and insertArrayItem() are the recommended calls.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI text. See [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| arrayName | `string` |  | Name text for the array-type property. A general path expression is allowed. |
| itemIndex | `number` |  | 1-based item position. Use XMPConst.`ARRAY_LAST_ITEM` when the target is the current final entry in the array. |
| itemValue | `string` |  | Replacement item text. Pass null for array entries with no value. |
| [itemOptions] | `number` | `0` | Flag describing the item when the call creates it. Choose one of: - 0: Simple item, or whatever type arrayOptions implies. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (of type alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as structured data containing child members. |

**Example**

Documented signature (call contract, not a function implementation):

`XMPMetaObj.setArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])`
