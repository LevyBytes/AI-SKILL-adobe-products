# XMPAliasInfo object properties

| Property | Type | Description |
| --- | --- | --- |
| arrayForm | Number | A constant that identifies the resolved alias property type; 0 means a simple property. Constants are: - XMPConst.`ALIAS_TO_SIMPLE_PROP`: Direct mapping; it can connect simple, array, or structure properties to the same property form. - XMPConst.`ALIAS_TO_ARRAY`: The real property is an unordered array, and the alias targets its first element. - XMPConst.`ALIAS_TO_ORDERED_ARRAY`: The real property is an ordered array, and the alias targets its first element. - XMPConst.`ALIAS_TO_ALT_ARRAY`: The real property is an alternate array, and the alias targets its first element. - XMPConst.`ALIAS_TO_ALT_TEXT`: The real property is an alternate text array, and the alias targets the x-default element. |
| name | String | The property name resolved from the alias. |
| namespace | String | The namespace for the property resolved from the alias. See Schema namespace string constants. |
