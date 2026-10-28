# dumpNamespaces(namespaceURI)

This method returns a readable string listing registered namespace URIs together with their prefixes.

**Returns**: `string` - a list of registered namespace URIs paired with their prefixes.

| Param | Type | Description |
| --- | --- | --- |
| namespaceURI | `string` | Namespace URI text. See [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |

**Example**

```js
XMPMeta.dumpNamespaces();
```
