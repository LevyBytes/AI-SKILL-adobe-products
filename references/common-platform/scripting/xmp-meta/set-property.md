# XMPMeta.setProperty()

XMPMetaObj.setProperty(schemaNS, propName, propValue[, setOptions, valueType])

### Description

Assigns a value to a simple metadata property, creates that property when needed, or creates a new array or structure property. For array and structure creation, prefer setArrayItem() and setStructField(). Use this method for top-level simple properties, or after composing paths with the XMPUtils path helpers.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| propName | String | Property name string. A general path expression is allowed.<br><br>propValue<br><br>String<br><br>New property contents as a string. Use null to create an array or a non-leaf structure property.<br><br>setOptions<br><br>For a simple-valued property, use 0 by default. Other constant values are: - 0 - simple item (default). - XMPConst.`PROP_IS_ARRAY` - array item (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT` - structure containing nested fields.<br><br>Optional. When the named property is absent, this selects the property kind to create. Default: 0.<br><br>valueType<br><br>Data type for the property. Allowed values: - XMPConst.STRING - XMPConst.INTEGER - XMPConst.NUMBER - XMPConst.BOOLEAN - XMPConst.XMPDATE<br><br>Optional. When provided, the supplied value is coerced into that type. |

### Returns

Nothing
