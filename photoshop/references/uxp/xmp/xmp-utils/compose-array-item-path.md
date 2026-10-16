# require('uxp').xmp.XMPUtils — composeArrayItemPath(schemaNS, arrayName, itemIndex)

Returns a constructed path-expression string for an array item by using the namespace's registered prefix, in the form:
schemaNS:arrayName[itemIndex]

**Returns**: `string` - path-expression string for an array item.

| Param | Type | Description |
| --- | --- | --- |
| schemaNS | `string` | Namespace URI string; see [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| arrayName | `string` | Array property name string. A general path expression is allowed. |
| itemIndex | `number` | 1-based position of the item. Use XMPConst.`ARRAY_LAST_ITEM` to target the final existing array item; then the returned path becomes ns:arrayName[last()]. |

**Example**

```js
XMPUtils.composeArrayItemPath(schemaNS, arrayName, itemIndex);
```
