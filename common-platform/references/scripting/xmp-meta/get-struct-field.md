# XMPMeta.getStructField()

XMPMetaObj.getStructField(schemaNS, structName, fieldNS, fieldName)

### Description

Gets the value of a field inside a nested metadata structure.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| structName | String | Structure name string; general path expressions are allowed. |
| fieldNS | Schema namespace string constants | Namespace string for the field type. |
| fieldName | String | Field name string. It must be a simple XML name. |

### Returns

An XMPProperty object, or undefined when the property is absent.
