# XMPMeta.doesStructFieldExist()

XMPMetaObj.deleteStructField(schemaNS, structName, fieldNS, fieldName)

### Description

Reports whether the metadata currently contains a structure field with the specified name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| structName | String | Structure name string; general path expressions are allowed. |
| fieldNS | Schema namespace string constants | Namespace string for the field type. |
| fieldName | String | Field name string. It must be a simple XML name. |

### Returns

Boolean. true when both the structure and field are present.
