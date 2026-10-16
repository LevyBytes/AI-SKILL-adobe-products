# XMPUtils.composeArrayItemPath()

XMPUtils.composeArrayItemPath(schemaNS, arrayName, itemIndex)

### Description

Builds and returns the path expression string for an array item, using the registered namespace prefix, in this form:

```javascript
schemaNS:arrayName[itemIndex]
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| schemaNS | Schema namespace string constants | Namespace URI string. |
| arrayName | String | Array property name string. A general path expression is allowed. |
| itemIndex | Number | 1-based item position. Use XMPConst.`ARRAY_LAST_ITEM` to refer to the last existing array item; in that case, the generated path becomes ns:arrayName[last()]. |

### Returns

String
