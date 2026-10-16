# XMPMeta.doesQualifierExist()

XMPMetaObj.doesQualifierExist(schemaNS, structName, qualNS, qualName)

### Description

Reports whether a qualifier with the specified name exists for a given property.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| structName | String | Structure name string; general path expressions are allowed. |
| qualNS | String | URI string for the qualifier namespace. |
| qualName | String | Qualifier name string. It must be a simple XML name. |

### Returns

Boolean. true when both the property and qualifier are present.
