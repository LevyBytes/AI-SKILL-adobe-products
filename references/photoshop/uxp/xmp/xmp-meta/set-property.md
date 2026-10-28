# setProperty(schemaNS, propName, propValue, [setOptions], [valueType])

This call assigns a simple metadata property's value and creates that property when needed; it can also create array or structure properties.
When creating arrays or structures, prefer [setArrayItem()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md#setarrayitemschemans-arrayname-itemindex-itemvalue-itemoptions) and [setStructField()](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/xmp/xmp-classes/xmp-meta.md#setstructfieldschemans-structname-fieldns-fieldname-fieldvalue-options).
Use it for top-level simple properties, either to create them or set them, and after composing paths with functions on the [XMPUtils object](../xmp-utils/reference-index.md).

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| schemaNS | `string` |  | Namespace URI text. See [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| propName | `string` |  | Property name text. A general path expression is allowed. |
| propValue | `string` |  | New property value text. Use null when creating an array or a structure property above the leaf level. |
| [setOptions] | `number` | `0` | Flags describing a new structure, used only when this call creates the structure. Choose one of: - 0: Simple item; this is the default. - XMPConst.`PROP_IS_ARRAY`: Marks the item as an array (of type alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT`: Marks the item as structured data containing child members. |
| [valueType] | `string` | `"\"\""` | Data type to apply to the property. When supplied, the value is converted to this type. Choose one of: - XMPConst.STRING - XMPConst.INTEGER - XMPConst.NUMBER - XMPConst.BOOLEAN - XMPConst.XMPDATE |

**Example**

Documented signature (call contract, not a function implementation):

`XMPMetaObj.setProperty(schemaNS, propName, propValue[, setOptions, valueType])`
