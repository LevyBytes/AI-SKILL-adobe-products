# XMPUtils.composeQualifierPath()

XMPUtils.composeQualifierPath(schemaNS, propName, qualNS, qualName)

### Description

Builds and returns the path expression string for a qualifier attached to a property, using the registered namespace prefix, in this form:

```javascript
schemaNS:propName/?qualNS:qualName
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| propName | String | Property name string. A general path expression is allowed. |
| qualNS | String | Qualifier namespace URI string. |
| qualName | String | Qualifier name; simple XML name required. |

### Returns

String
