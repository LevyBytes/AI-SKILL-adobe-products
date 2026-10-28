# XMPMeta.deleteQualifier()

XMPMetaObj.deleteQualifier(schemaNS, structName, qualNS, qualName)

### Description

Deletes the metadata tree rooted at the specified qualifier. If the qualifier is absent, no action occurs.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| structName | String | Structure name string; general path expressions are allowed. |
| qualNS | String | URI string for the qualifier namespace. |
| qualName | String | Qualifier name string. It must be a simple XML name. |

### Returns

Nothing
