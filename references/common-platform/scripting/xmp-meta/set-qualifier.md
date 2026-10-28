# XMPMeta.setQualifier()

XMPMetaObj.setQualifier(schemaNS, propName, qualNS, qualName, qualValue[, options])

### Description

Adds a qualifier to a metadata property. The target can be a simple property, an array item, a struct field, or an existing qualifier.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| propName | String | Existing property name string. A general path expression is allowed. |
| qualNS | String | Qualifier namespace URI. It follows the same URI and prefix rules used by schema namespaces. |
| qualName | String | Qualifier name. It must be a simple XML name and uses property-name prefix rules.<br><br>qualValue<br><br>String<br><br>New qualifier contents as a string. Use null when the qualifier has no value.<br><br>options<br><br>Flags defining the qualifier. One of: - 0 - simple item (default). - XMPConst.`PROP_IS_ARRAY` - array item (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT` - structure containing nested fields.<br><br>Optional, and used only during qualifier creation. |

### Returns

Nothing
