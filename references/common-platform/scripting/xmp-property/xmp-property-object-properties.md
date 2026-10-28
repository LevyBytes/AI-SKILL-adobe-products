# XMPProperty object properties

| Parameter | Type | Description |
| --- | --- | --- |
| locale | String | Language attached to the property value. Calls to getLocalizedText() set this value to the language of the selected alternative text item when a suitable item exists. |
| namespace | String | Property namespace; see Schema namespace string constants. This is commonly useful while browsing metadata with an XMPIterator object. |
| options | Number | Constant describing the property type, with 0 meaning a simple property. Constants are: - XMPConst.`PROP_IS_ARRAY` - property is an array (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT` - property is a structure containing nested fields. |
| path | String | Property path, including the property name. For a simple property, the property name is the complete path. |
| value | Variant | Property value, if present. Arrays and non-leaf structure levels have no values. |
