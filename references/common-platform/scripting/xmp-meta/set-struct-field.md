# XMPMeta.setStructField()

XMPMetaObj.setStructField(schemaNS, structName, fieldNS, fieldName, fieldValue[, options])

### Description

Sets a field value inside a structure-type property. If the named field does not exist, it creates the field; if the named structure does not exist, it creates a new structure containing that field.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| structName | String | Name string for an existing structure; general path expressions are allowed. |
| fieldNS | Schema namespace string constants | Namespace string for the field type. |
| fieldName | String | Field name string. It must be a simple XML name.<br><br>fieldValue<br><br>String<br><br>New field contents as a string. Use null when a field has no value.<br><br>options<br><br>Flags defining the structure to create. One of: - 0 - simple item (default). - XMPConst.`PROP_IS_ARRAY` - array item (alt, bag, or seq). - XMPConst.`PROP_IS_STRUCT` - structure containing nested fields.<br><br>Optional, and consulted only during structure creation. |

### Returns

Nothing
