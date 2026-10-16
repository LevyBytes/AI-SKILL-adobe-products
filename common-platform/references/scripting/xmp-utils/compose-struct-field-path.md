# XMPUtils.composeStructFieldPath()

XMPUtils.composeStructFieldPath(schemaNS, structName, fieldNS, fieldName)

### Description

Builds and returns the path expression string for a structure field, using registered namespace prefixes, in this form:

Reference data, output or notation; not an executable JavaScript program.

```text
schemaNS:structName/fieldNS:fieldName
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| structName | String | Structure property name string. A general path expression is allowed. |
| fieldNS | String | Field namespace URI string. |
| fieldName | String | Field name; simple XML name required. |

### Returns

String
