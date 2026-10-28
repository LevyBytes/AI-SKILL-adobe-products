# getNamespacePrefix(namespaceURI)

Returns the prefix mapped to a registered namespace URI.

**Returns**: `string` - prefix text with a trailing colon.

| Param | Type | Description |
| --- | --- | --- |
| namespaceURI | `string` | Namespace URI text. See [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |

**Example**

```js
XMPMeta.getNamespacePrefix(namespaceURI);
```
