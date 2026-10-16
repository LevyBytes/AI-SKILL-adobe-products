# XMPMeta.getQualifier()

XMPMetaObj.getQualifier(schemaNS, structName, qualNS, qualName)

### Description

Gets a metadata property's attached qualifier.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI value. |
| structName | String | Structure name string; general path expressions are allowed. |
| qualNS | String | URI string for the qualifier namespace. |
| qualName | String | Qualifier name string. It must be a simple XML name. |

### Returns

An XMPProperty object, or undefined when the property is absent.
