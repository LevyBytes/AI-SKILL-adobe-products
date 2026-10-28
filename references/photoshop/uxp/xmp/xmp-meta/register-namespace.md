# registerNamespace(namespaceURI, suggestedPrefix)

This method registers a namespace and prefix. When the suggested prefix is already taken, it creates, registers, and returns another prefix.

**Returns**: `string` - string containing the prefix that was actually registered. It matches suggestedPrefix unless that prefix is already bound to another namespace.

| Param | Type | Description |
| --- | --- | --- |
| namespaceURI | `string` | Namespace URI text. See [Schema namespace string constants](../../xmp-xmp-const/schema-namespace-string-constants.md). |
| suggestedPrefix | `string` | Suggested namespace prefix text. |

**Example**

```js
XMPMeta.registerNamespace(namespaceURI, suggestedPrefix);
```
