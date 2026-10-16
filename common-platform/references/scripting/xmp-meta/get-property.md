# XMPMeta.getProperty()

XMPMetaObj.getProperty(schemaNS, propName[, valueType])

### Description

Gets a metadata property's value and options. Use it with top-level simple properties, or after XMPUtils path-composition functions have built the path.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| propName | String | Property name string; general path expressions are allowed. |
| valueType | String | Optional. Data type for the property: - XMPConst.STRING - XMPConst.INTEGER - XMPConst.NUMBER - XMPConst.BOOLEAN - XMPConst.XMPDATE |

### Returns

An XMPProperty object, or undefined when the property is absent.
