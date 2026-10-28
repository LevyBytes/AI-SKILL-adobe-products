# XMPUtils.composeFieldSelector()

XMPUtils.composeFieldSelector(schemaNS, arrayName, fieldNS, fieldName, fieldValue)

### Description

Builds and returns the path expression string that selects an alternate item by field value, using registered namespace prefixes, in this form:

Reference data, output or notation; not an executable JavaScript program.

```text
schemaNS:arrayName[fieldNS:fieldName="fieldValue"]
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| arrayName | String | Array property name string. A general path expression is allowed. |
| fieldNS | String | Field namespace URI string. |
| fieldName | String | Field name; simple XML name required. |
| fieldValue | Any | Field value to match. |

### Returns

String
